import './footer.css'

const footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='footer-social'>
                    <h4>Contact me</h4>
                    <a href=""><img src="/public/facebook (2).png" width="35px" alt="" /></a>
                    <a href=""><img src="/public/instagram (1).png" width="35px" alt="" /></a>
                    <a href=""><img src="/public/linkedin.png" width="35px" alt="" /></a>
                    <a href=""><img src="/public/github (1).png" width="35px" alt="" /></a>
                </div>
                <div className='footer-copyright'><p>
                    Copyright ©2024; Designed by ArmNonthakon
                </p></div>
            </div>
        </>
    )
}

export default footer