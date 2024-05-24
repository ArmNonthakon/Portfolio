import './skill.css'
import { TbBrandGolang } from "react-icons/tb";

function Skill() {
    return (
        <>
            <div className='section-skill'>
                <h1 style={{ fontSize: "50px", color: "white" }} className='skill-topic'></h1>
            </div>
            <div className='section-show-skill'>
                <div>
                    <h2 style={{ fontSize: "35px", color: "white" }}>Programming language</h2>
                    <div className='contain-skill'>
                        <div className='skill-block'>
                            <img src="public/golang_official_logo_icon_169092.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/file_type_js_official_icon_130509.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/java_original_logo_icon_146458.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/python_vertical_logo_icon_168039.svg" width="80px" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{ fontSize: "35px", color: "white" }}>Frondend framwork</h2>
                    <div className='contain-skill'>
                        <div className='skill-block'>
                            <img src="public/react_original_logo_icon_146374.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/vue_icon_130791.svg" width="80px" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{ fontSize: "35px", color: "white" }}>Cloud</h2>
                    <div className='contain-skill'>
                        <div className='skill-block'>
                            <img src="public/amazon_logo_icon_169612.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/microsoft_azure_logo_icon_170956.svg" width="80px" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{ fontSize: "35px", color: "white" }}>Database</h2>
                    <div className='contain-skill'>
                        <div className='skill-block'>
                            <img src="public/postgresql_original_wordmark_logo_icon_146392.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/mysql_original_wordmark_logo_icon_146417.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/mongodb_original_wordmark_logo_icon_146425.svg" width="80px" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{ fontSize: "35px", color: "white" }}>Other</h2>
                    <div className='contain-skill'>
                        <div className='skill-block'>
                            <img src="public/docker_icon_146192.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/file_type_git_icon_130581.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/github_git_icon_145985.svg" width="80px" alt="" />
                        </div>
                        <div className='skill-block'>
                            <img src="public/linux_penguin_animal_9362.png" width="80px" alt="" />
                        </div>
                    </div>
                </div>
                



            </div>


        </>
    )
}
export default Skill