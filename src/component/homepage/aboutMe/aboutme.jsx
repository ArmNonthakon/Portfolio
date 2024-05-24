import './aboutme.css'

function Aboutme() {
    return (
        <>
            <div className='section-one-aboutme'>
                <div className='name-pic'>
                    <div className='Pic-personal'></div>
                    <div className='pic-deco'></div>
                </div>

                <div className='sec-text'>
                    <div className='sec-text-name'>
                        <h1>Nonthakon Tansamai (Arm)</h1>
                        <h1>Student</h1>
                    </div>
                    <button>CONTACT ME</button>
                </div>
            </div>
            <div className='content-text'>
                <h1 className='about-me-animation'>
                    
                </h1>
                <p><span style={{ marginLeft: "50px" }}>        </span>I am studying computer science at Silpakorn University. I'm a third-year student that interested in a web developer job in an internship. I used to do many projects such as website e-commerce, simple web chat, machine learning for classifying fake news</p>

            </div>
            <div className='education'>
                <h1>Education</h1>
                <div className='roadmap'>
                    <div className='group-roadmap'>
                        <div className='dot' id='dot1'></div>
                        <div className='rec' id='rec1'></div>
                    </div>
                    <div className='group-roadmap'>
                        <div className='dot' id='dot2'></div>
                        <div className='rec' id='rec2'></div>
                    </div>
                    <div className='group-roadmap'>
                        <div className='dot' id='dot3'></div>
                    </div>
                </div>
                <div className='education-road'>
                    <p>2021 - Present
                        Silpakorn University
                        bachelor of science in computer science degree
                        GPA : 2.55</p>
                    <p>
                        2015- 2020
                        Sirirattanathorn School
                        English-Mathematics Program
                        GPA : 2.8
                    </p>
                    <p>2009 - 2014
                        Bannongbon School</p>
                </div>


            </div>


        </>
    )
}
export default Aboutme