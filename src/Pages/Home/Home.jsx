import React from 'react'

// import Hero from '../../Components/Home/Hero/Hero'
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div >
         <nav className={styles.navbar}>
        <div className={styles.logo_container}>
            <img src="./Images/logo.png" alt="" className={styles.logo}/>
        </div>
        <div className={styles.search_container}>
            <input type="search" placeholder=" Search BMW/x5" className={styles.search_bar}/>
        </div>
        <div className={styles.list_item}>
            <ul className={styles.menu}>
                <li><a href="#showcase">Shop</a></li>
                <li><a href="#about">sale/trade</a></li>
                <li><a href="#food">finanace</a></li>
                <li><a href="#food-menu">service</a></li>
                <li><a href="#testimonial">more</a></li>
                {/* <!-- <li><a href="#contact"> Contact</a></li> --> */}
            </ul>
        </div>
        <i className="fa-regular fa-circle-user icon"></i>
    </nav>

    <section className={styles.main_section}>
        <div className={styles.main_image}>
            <img src="./Images/image-1.png" alt=""/>
        </div>
        <div className={styles.sub_section}>
            <div>
                <img src="./Images/main.png" alt=""/>

            </div>
            <div>
                <img src="./Images/image-2.png" alt=""/>

            </div>
            <div>
                <img src="./Images/image-3.png" alt=""/>

            </div>
        </div>
    </section>

    <div className={styles.container}>

        <div className={styles.section_content}>
            <div className={`${styles.box_1} ${styles.box}`}>
                <p>2021</p>
                <h3>Toyota RAV 4</h3>
                <p>TRD Off Road SUV</p>
            </div>
            <div className={`${styles.box_2} ${styles.box}`}>
                <h3>&#36 34.399</h3>
                <p>est &#36 633/mo </p>
            </div>
            <div className={`${styles.box_3} ${styles.box}`}>
                <input type="button" value="Get Started" className={styles.btn}/>
           </div>
    
        </div>
    </div>

    <div className={styles.container_2}>
        <h2>Highlighted Features </h2>

        <div className={styles.features}>
            <div className={`${styles.item_1} ${styles.item}`}>
                <i className="fab fa-bluetooth-b"></i>
                <p>Bluetooth Connectivity</p>
            </div>
            <div className={`${styles.item_2} ${styles.item}`}>
                <i className="fas fa-camera-alt"></i>
                <p>Reversing Camera</p>
            </div>
            <div className={`${styles.item_3} ${styles.item}`}>
                <i className="fas fa-camera-alt"></i>
                <p>Reversing Camera</p>
            </div>
            <div className={`${styles.item_4} ${styles.item}`}>
                <i className="fab fa-android"></i>
                <p>Android Auto</p>
            </div>
            <div className={`${styles.item_5} ${styles.item}`}>
                <i className="fab fa-apple"></i>
                <p>Apple Car <br/>
                     Play</p>
            </div>
            <div className={`${styles.item_6} ${styles.item}`}>
                <i className="fas fa-door-open"></i>
                <p>Sensor Door <br/> Opening</p>
            </div>
            <div className={`${styles.item_7} ${styles.item}`}>
                <i className="fas fa-door-open"></i>
                <p>Sensor Door <br/> Opening</p>
            </div>
            <div className={`${styles.item_8} ${styles.item}`}>
                <i className="fab fa-android"></i>
                <p>All-Wheel <br/>
                    Drive</p>
            </div>
        
        </div>
    </div>

    <section className={styles.container_3}>

        <div className={styles.main_items}>
            <div className={styles.list}>
                <div className={styles.items}>
                    <h1>Listing Details</h1>
                    <div>
                        <h2>Harim shayan</h2>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <h2>Harim shayan</h2>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <h2>Harim shayan</h2>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <h2>Harim shayan</h2>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <h2>Harim shayan</h2>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <h2>Harim shayan</h2>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                
                </div>
            </div>

                <div className={styles.car_list}>
                    <div className={styles.car_items}>
                        <h1>Vehicle Details </h1>
                        <div>
                            <h2>Harim shayan</h2>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div>
                            <h2>Harim shayan</h2>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div>
                            <h2>Harim shayan</h2>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div>
                            <h2>Harim shayan</h2>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div>
                            <h2>Harim shayan</h2>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div>
                            <h2>Harim shayan</h2>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    
                    </div>
                </div>   
        </div>
     
    </section>

    <section className={styles.container_4}>
        <div className={styles.pic_container}>
            <h2>24 Vehicles Photos</h2>
            <div className={styles.photo_item}>
                <div>
                    <img src="./Images/Rectangle 45.png" alt=""/>
                </div>
                <div>
                    <img src="./Images/Rectangle 46.png" alt=""/>
                </div>
                <div>
                    <img src="./Images/Rectangle 47.png" alt=""/>
                </div>
                <div>
                    <img src="./Images/Rectangle 48.png" alt=""/>
                </div>
                <div className={styles.pic}>
                    <i className="fa-solid fa-image"></i>
                    <p>See All Photos</p>
                </div>
           
            </div>

        </div>

    </section>

    <section className={styles.container_5}>
        <h2>You may also like these vehicles</h2>
        <div className={styles.pic_item}>
            <div>
                <div>
                    <img src="./Images/Rectangle 60.png" alt=""/> 
                </div>
                <div className={styles.content}>
                    <div className={styles.content_1}>
                        <p>2021</p>
                        <h3>Toyota RAV 4</h3>
                        <p>TRD Off Road SUV</p>
                    </div>
                     <div className={styles.content_2}>
                        <h3>&#36 34.399</h3>
                        <p>est &#36 633/mo </p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                   <img src="./Images/Rectangle 60 (1).png" alt=""/>
               </div>
               <div className={styles.content}>
                   <div className={styles.content_1}>
                       <p>2021</p>
                       <h3>Toyota RAV 4</h3>
                       <p>TRD Off Road SUV</p>
                   </div>
                    <div className={styles.content_2}>
                       <h3>&#36 34.399</h3>
                       <p>est &#36 633/mo </p>
                   </div>
               </div>
           </div>

           <div>
            <div>
               <img src="./Images/Rectangle 60 (2).png" alt=""/>
           </div>
           <div className={styles.content}>
               <div className={styles.content_1}>
                   <p>2021</p>
                   <h3>Toyota RAV 4</h3>
                   <p>TRD Off Road SUV</p>
               </div>
                <div className={styles.content_2}>
                   <h3>&#36 34.399</h3>
                   <p>est &#36 633/mo </p>
               </div>
            </div>
          </div>
      </div>
</section>
    </div>
  )
}

export default Home