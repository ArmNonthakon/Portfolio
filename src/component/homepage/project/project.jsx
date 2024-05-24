import './project.css'

function Project() {
    return (
        <>
            <div className='section-project'>
                <h1 style={{ fontSize: "50px", color: "white" }} className='project-topic'></h1>
            </div>
            <div className='contain-project'>
                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px"}} >Catcat </h2>
                <div className='contain-pic'>
                    <img src="public/MY CAT - Google Chrome 5_24_2024 11_42_57 PM.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p style={{ color: "white" ,marginLeft:"40px",marginTop:"20px"}} ><spam style={{marginLeft:"60px"}}></spam>โปรเจคนี้เกี่ยวกับเว็บไซต์การเก็บข้อมูลรูปภาพ ชื่อ เพศ อายุ สี พันธ์ของน้องแมวแต่ละตัว ภายใรเว็บก็มีฟังก์ชั่นแสดงข้อมูล สามารถเลือกแสดงประเภทข้อมูลได้ว่าต้องการให้แสดงน้องแมวเพศไหน สีอะไร
                มีฟังก์ชั่นการลบเพิ่มแก้ไขข้อมูล มีระบบ Authentication และ Authorization โปรแกรม Deploy ขึ้น Clound vm โดยใช้ Docker เป็น Docker-compose รันทั้งฝั่งหน้าและหลังบ้านพร้อมกัน ใช้ nginx ช่วยจัดการ</p>
                </div>
                <div className='clikToPage'>
                    <p>Fronend : React</p>
                </div>
                <div className='clikToPage'>
                    <p>Backend : Golang(Fiber)</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/Full-stack-catcat">Click here</a>
                </div>
                <div className='clikToPage'>
                    <p>Visit website</p><a href="http://139.5.147.97/">Click here</a>
                </div>


                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px",marginTop:"40px"}} >Fake news machine learning </h2>
                <div className='contain-pic'>
                    <img src="public/Fake_news.py - newCat - Visual Studio Code 5_25_2024 12_13_15 AM.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p style={{ color: "white" ,marginLeft:"40px",marginTop:"20px"}} ><spam style={{marginLeft:"60px"}}></spam>โปรเจคนี้ได้นำ Machine learning มาจำแนกข่าวว่าข่าวใดที่น่าจะเป็นข่าวเท็จ ข่าวใดเป็นข่าวจริง โดยใช้วิธีจำแนกจะจำแนกจากบทความในเนื้อข่าว โดยวิธี NLP </p>
                </div>
                <div className='clikToPage'>
                    <p>Programming language : Python</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/Fakes-News-Machine-learning">Click here</a>
                </div>


                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px",marginTop:"40px"}} >4king </h2>
                <div className='contain-pic'>
                    <img src="public/4kings - Google Chrome 5_25_2024 12_22_55 AM.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p style={{ color: "white" ,marginLeft:"40px",marginTop:"20px"}} ><spam style={{marginLeft:"60px"}}></spam>โปรเจคนี้ได้นำ Machine learning มาช่วยจำแนกจัดสรรว่าสมาชิกแต่ละคนควรอยู่สถาบันใด และลอง Deploy ขึ้น onrender</p>
                </div>
                <div className='clikToPage'>
                    <p>Programming language : Python</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/deploy-4kings">Click here</a>
                </div>
                <div className='clikToPage'>
                    <p>Visit website</p><a href="https://deploy-4kings.onrender.com/">Click here</a>
                </div>
                

                <div className='clikToPage' style={{marginTop:"100px"}}>
                    <p>Visit other Project</p><a href="https://github.com/ArmNonthakon">Click here</a>
                </div>

                
            </div>
        </>
    )
}

export default Project