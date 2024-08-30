import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'leomessisite',
        name: 'Leonel Messi',
        isFollowing: true
    },
    {
        userName: 'Ferrari',
        name: 'Ferrari',
        isFollowing: true
    },
]

export function App() {

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing } ) =>  (
                    <TwitterFollowCard 
                    key={userName} 
                    userName={userName} 
                    name={name} 
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}