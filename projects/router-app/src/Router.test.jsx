import { describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Router } from '../src/Router.jsx'
import { Route } from "./Route.jsx";
import { Link } from "./Link.jsx";
import { getCurrentPath } from "./utils.js";

vi.mock('./utils/getCurrentPath.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    //Antes de cada test limpiamos pantalla
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes math', () => {
        render(<Router routes={[]} defaultComponet={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
        console.log(screen.debug())
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            },
        ]
        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should navigate using Links', async () => {
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route
                    path='/' Component={() => {
                        return (
                            <>
                                <h1>Home</h1>
                                <Link to='/about' >Go to About</Link>
                            </>
                        )
                    }}
                />
                <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
        )

        //Click on the link
        const anchor  = screen.getByText(/Go to About/)
        fireEvent.click(anchor)

        const aboutTitle = await screen.findByText('About')

        //Check that the new route is rendered
        expect(aboutTitle).toBeTruthy()
    })

})