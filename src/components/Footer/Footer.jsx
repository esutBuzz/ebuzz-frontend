import logo from '/icons/ebuzz-white.png'
import data from '../../../data/Footer.json'
import PageButton from '../PageButton/PageButton'
import './Footer.scss'

export default function Footer() {
    return(
        <footer>
            <main>
                <img src={logo} alt="ebuzz logo" />

                <span>
                    {UserAuth.map((items, index) => (
                        <PageButton
                            key={index}
                            title={items.name}
                            link={items.link}
                            className='user-btn'
                        />
                    ))}
                </span>
            </main>

            <aside>
                <section>
                    <ul>
                        <h4>Product</h4>
                        {data.product.map((items, index) => (
                            <li key={index}>{...items}</li>
                        ))}
                    </ul>
                    <ul>
                        <h4>Use eBuzz</h4>
                        {data.eBuzz.map((items, index) => (
                            <li key={index}>{...items}</li>
                        ))}
                    </ul>

                    <ul>
                        <h4>Company</h4>
                        {data.company.map((items, index) => (
                            <li key={index}>{...items}</li>
                        ))}
                    </ul>
                </section>

                <menu>
                    <article>
                        {data.legal.map((items, index) => (
                            <span key={index}>{...items}</span>
                        ))}
                    </article>

                    <aside>
                        {data.socials.map((items, index) => (
                            <img src={items} alt="icons" key={index} />
                        ))}
                    </aside>
                </menu>
            </aside>
        </footer>
    )
}

const UserAuth = [
    { name: 'Log in', link: '/login' },
    { name: 'Sign Up', link: '/signup' }
]