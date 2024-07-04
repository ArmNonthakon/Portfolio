import './project.css'

function Project() {
    return (
        <>
            <div className='section-project'>
                <h1 style={{ fontSize: "50px", color: "white" }} className='project-topic'></h1>
            </div>
            <div className='contain-project'>
            <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px"}} >Minor cineplex </h2>
                <div className='contain-pic'>
                    <img src="/minor_cineplex.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p className='text-content-project' ><spam style={{marginLeft:"60px"}}></spam>เป็นโปรเจคที่ได้ทดลองจะทำการโคลนเว็บไซต์ของทาง Major cineplex อาจจะไม่ได้โคลนมาทุกฟีเจอร์ หลักๆก็จะเป็นแสดงรายการหนัง แสดงที่นั่งของแต่ละโรงหนัง และจองตั๋วหนัง จะมีเพิ่มฟีเจอร์ล็อกอินกับลงทะเบียนที่ออกแบบและเขียนเพิ่ม</p>
                </div>
                <div className='clikToPage'>
                    <p>Fronend : React</p>
                </div>
                <div className='clikToPage'>
                    <p>Backend : Golang(Fiber)</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/Minor-Cineplex">Click here!!</a>
                </div>
                <div className='clikToPage'>
                    <p>Visit website</p><a href="http://139.5.147.97/">Click here</a>
                </div>


                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px"}} >Catcat </h2>
                <div className='contain-pic'>
                    <img src="/MY_CAT.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p className='text-content-project' ><spam style={{marginLeft:"60px"}}></spam>โปรเจคนี้เกี่ยวกับเว็บไซต์การเก็บข้อมูลรูปภาพ ชื่อ เพศ อายุ สี พันธ์ของน้องแมวแต่ละตัว ภายใรเว็บก็มีฟังก์ชั่นแสดงข้อมูล สามารถเลือกแสดงประเภทข้อมูลได้ว่าต้องการให้แสดงน้องแมวเพศไหน สีอะไร
                มีฟังก์ชั่นการลบเพิ่มแก้ไขข้อมูล มีระบบ Authentication และ Authorization โปรแกรม Deploy ขึ้น Clound vm โดยใช้ Docker เป็น Docker-compose รันทั้งฝั่งหน้าและหลังบ้านพร้อมกัน ใช้ nginx ช่วยจัดการ</p>
                </div>
                <div className='clikToPage'>
                    <p>Fronend : React</p>
                </div>
                <div className='clikToPage'>
                    <p>Backend : Golang(Fiber)</p>
                </div>
                <div className='clikToPage'>
                    <p>Web design: Figma</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/Full-stack-catcat">Click here!!</a>
                </div>
                <div className='clikToPage'>
                    <p>Visit website</p><a href="http://139.5.147.97/">Click here</a>
                </div>

                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px",marginTop:"40px"}} >Web portfolio </h2>
                <div className='contain-pic'>
                    <img src="/Portfolio - Google Chrome 5_29_2024 11_51_46 PM.png" width="95%" style={{border:"2px solid black"}} alt="" />
                </div>
                <div className='contain-text'>
                <p className='text-content-project' ><spam style={{marginLeft:"60px"}}></spam>เว็บพอร์ตที่ออกแบบและเขียเป็น Static website เริ่มด้วยออกแบบผ่าน Figma และเริ่มเขียนออกเป็นตัวเว็บโดยใช้เป็น React.js ในการเขียน</p>
                </div>
                <div className='clikToPage'>
                    <p>Frondend framework: React.js</p>
                </div>
                <div className='clikToPage'>
                    <p>Web design: Figma</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/Portfolio">Click here</a>
                </div>
                <div className='clikToPage'>
                    <p>Visit website</p><a href="https://pofolio-nonthakon-tansamai.vercel.app/">Click here</a><p style={{fontSize:"12px",color:"red",marginLeft:"5px",marginBottom:"3px"}}>( ถ้า Click ก็จะวนมาที่เว็บนี้แหละะ )</p>
                </div>





                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px",marginTop:"40px"}} >Fake news machine learning </h2>
                <div className='contain-pic'>
                    <img src="/Fake_news.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p className='text-content-project' ><spam style={{marginLeft:"60px"}}></spam>โปรเจคนี้ได้นำ Machine learning มาจำแนกข่าวว่าข่าวใดที่น่าจะเป็นข่าวเท็จ ข่าวใดเป็นข่าวจริง โดยใช้วิธีจำแนกจะจำแนกจากบทความในเนื้อข่าว โดยวิธี NLP </p>
                </div>
                <div className='clikToPage'>
                    <p>Programming language : Python</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/Fakes-News-Machine-learning">Click here</a>
                </div>



                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px",marginTop:"40px"}} >4king </h2>
                <div className='contain-pic'>
                    <img src="/4kings.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p  className='text-content-project' ><spam style={{marginLeft:"60px"}}></spam>โปรเจคนี้ได้นำ Machine learning มาช่วยจำแนกจัดสรรว่าสมาชิกแต่ละคนควรอยู่สถาบันใด และลอง Deploy ขึ้น onrender</p>
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
                
                <h2 style={{ fontSize: "40px", color: "white" ,marginBottom:"20px",marginTop:"40px"}} >Koala shop</h2>
                <div className='contain-pic'>
                    <img src="/KOALA Shop - Google Chrome 6_4_2024 2_35_14 PM.png" width="95%" alt="" />
                </div>
                <div className='contain-text'>
                <p  className='text-content-project' ><spam style={{marginLeft:"60px"}}></spam>เว็บขายสินค้า แสดงสินค้าเสื้อผ้า</p>
                </div>
                <div className='clikToPage'>
                    <p>Frondend framework: React.js</p>
                </div>
                <div className='clikToPage'>
                    <p>Programming language : Golang</p>
                </div>
                <div className='clikToPage'>
                    <p>Web design: Figma</p>
                </div>
                <div className='clikToPage'>
                    <p>Visit github</p><a href="https://github.com/ArmNonthakon/KOALA-Shop">Click here</a>
                </div>
                <div className='clikToPage'>
                    <p>Visit website</p><a href="https://koala-shop.vercel.app/">Click here</a>
                </div>


                <div className='clikToPage' style={{marginTop:"100px"}}>
                    <p>Visit other Project</p><a href="https://github.com/ArmNonthakon">Click here</a>
                </div>

                
            </div>
        </>
    )
}

export default Project