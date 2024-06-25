import React from 'react'

const Home = ({launch,title,btn,desktop,mobile,video}) => {
    return (
        <>
            <section className="section-01">
                <div className="main-01">
                    {video == null ? 
                    <picture>
                        <source srcset={mobile} media="(max-width: 599px)"/>
                        <img src={desktop} alt=""/>
                    </picture> 
                    :
                    <video src={video} autoPlay loop muted/>
                    }
                        <div className="rag-content">
                            <div className="box-content">
                                <div className="content-01">
                                    <h3 data-aos="fade-up" data-aos-duration="800" data-aos-once="true">{launch}</h3>
                                    <h1 data-aos="fade-up" data-aos-duration="800" data-aos-once="true">{title}</h1>
                                </div>
                                <button data-aos="fade-up" data-aos-duration="800" data-aos-once="true" className="btn">{btn}</button>
                            </div>
                        </div>
                        <div className="scroll-down"></div>
                </div>
            </section>
        </>
    )
}

export default Home