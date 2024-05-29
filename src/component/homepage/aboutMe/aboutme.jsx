import './aboutme.css'

function Aboutme() {
    return (
        <>
            <div className='section-one-aboutme'>
                <div className='name-pic'>
                    <div className='Pic-personal'></div>
                    <div className='pic-deco'></div>
                    <div className='pic-deco'></div>
                </div>
                <div className='sec-text'>
                    <div className='sec-text-name'>
                        <h1>Nonthakon Tansamai (Arm)</h1>
                        <h1>Student</h1>
                    </div>
                    <a href="/contact"><button>CONTACT ME</button></a>
                </div>
            </div>
            <div className='content-text'>
                <h1 className='about-me-animation'></h1>
                <p><span style={{ marginLeft: "50px" }}>        </span>I am studying computer science at Silpakorn University. I'm a third-year student. I used to do many projects such as website e-commerce, simple web chat, machine learning for classifying fake news</p>

            </div>
            <div className='education'>
                <h1>Education</h1>
                <div className='education-road'>
                    <div className='block-content-education'>
                        <div className='group-roadmap'>
                            <div className='dot' ></div>
                            <div className='rec' ></div>
                        </div>

                        <p>2021 - Present
                            Silpakorn University
                            bachelor of science in computer science degree
                            GPA : 2.55</p>
                    </div>

                    <br />
                    <div className='block-content-education'>
                        <div className='group-roadmap'>
                            <div className='dot' ></div>
                            <div className='rec' ></div>
                        </div>
                        <p>
                            2015- 2020
                            Sirirattanathorn School
                            English-Mathematics Program
                            GPA : 2.8
                        </p>
                    </div>

                    <br />
                    <div className='block-content-education'>
                        <div className='group-roadmap'>
                            <div className='dot' ></div>
                        </div>
                        <p>2009 - 2014
                            Bannongbon School</p>
                    </div>

                </div>


            </div>


        </>
    )
}
export default Aboutme