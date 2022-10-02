import React from 'react'
import styles from './Second.module.css'

function SecondPage() {
  return (
    <div>
        <nav className={styles.navbar}>
        <div className={`${styles.navbar_container} ${styles.container}`}>
            <input type="checkbox"/>
            <div className={styles.hamburger_lines}>
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <ul className={styles.menu}>
                <li><a href="#showcase">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#food">Catergory</a></li>
                <li><a href="#food-menu">Menu</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact"> Contact</a></li>
            </ul>
            <h2 className={styles.logo}>Fw</h2>
        </div>
    </nav>
    <section className={styles.showcase_area} id="showcase">
        <div className={styles.showcase_container}>
            <h1 className={styles.main_title}>Eat Right Food</h1>
            <p>Eat Healthy food, it is good for your health</p>
            <a href="#food-menu" className={`${styles.btn} ${styles.btn_primary}`}>Menu</a>   
        </div>
    </section>

  <section id={styles.about}>
      <div className={`${styles.about_wrapper} ${styles.container}`}>
           <div className={styles.about_text}>
              <p className={styles.small}>About us</p>
              <h2>We've been making healthy food for last 10 year</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iusto quisquam voluptates, sint tempora velit, ut maxime sunt nemo odit culpa. Nostrum possimus quae, error harum maxime voluptatum molestiae iure facilis praesentium, tenetur vero rerum fuga voluptas corporis expedita asperiores?</p>
          </div>

           <div className={styles.about_img}>
              <img src="./Images/about-photo.jpg" alt="About us"/>
           </div>     
      </div>
    </section>


    <section id={styles.food}>
        <h2>TYPES OF FOOD</h2>
       <div className={`${styles.food_container} ${styles.container}`}>
          <div className={`${styles.food_type} ${styles.fruit}`}>

            <div className={styles.img_container}>
                <img src="./Images/food1.jpg" alt=""/>
                <div className={styles.img_content}>
                    <h3>Fruits</h3>
                    <a href="" className={`${styles.btn} ${styles.btn_primary}`} target="_blank">Learn more</a>
                </div>
            </div>
           

        </div>
        <div className={`${styles.food_type} ${styles.vegetable}`}>
            <div className={styles.img_container}>
                <img src="./Images/food2.jpg" alt=""/>
                <div className={styles.img_content}>
                    <h3>Vegatable</h3>
                    <a href="" className={`${styles.btn} ${styles.btn_primary}`} target="_blank">Learn more</a>
                </div>
            </div>
        </div>

        <div className={`${styles.food_type} ${styles.grain}`}>

            <div className={styles.img_container}>
                <img src="./Images/food3.jpg" alt=""/>
                <div className={styles.img_content}>
                    <h3>Grain</h3>
                    <a href="" className={`${styles.btn} ${styles.btn_primary}`} target="_blank">Learn more</a>
                </div>
            </div>
        </div>
      </div>
     
    </section>

     <section id={styles.food_menu}>
        <h2 className={styles.food_menu_heading}>
            Food Menu
        </h2>
        <div className={`${styles.food_menu_container} ${styles.container}`}>
            <div className={styles.food_menu_item}>
                <div className={styles.food_image}>
                    <img src="./Images/food-menu1.jpg" alt=""/>
                </div>
                <div className={styles.food_description}>
                    <h2 className={styles.food_heading}>Food Menu Item 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, pariatur!</p>
                    <p className={styles.food_price}> Price: &#8377; 250</p>
                </div>
            </div>
            <div className={styles.food_menu_item}>
                <div className={styles.food_image}>
                    <img src="./Images/food-menu2.jpg" alt=""/>
                </div>
                <div className={styles.food_description}>
                    <h2 className={styles.food_heading}>Food Menu Item 2</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, pariatur!</p>
                    <p className={styles.food_price}> Price: &#8377; 350</p>
                </div>
            </div>
            <div className={styles.food_menu_item}>
                <div className={styles.food_image}>
                    <img src="./Images/food-menu3.jpg" alt=""/>
                </div>
                <div className={styles.food_description}>
                    <h2 className={styles.food_heading}>Food Menu Item 3</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, pariatur!</p>
                    <p className={styles.food_price}> Price: &#8377; 450</p>
                </div>
            </div>
            <div className={styles.food_menu_item}>
                <div className={styles.food_image}>
                    <img src="./Images/food-menu4.jpg" alt=""/>
                </div>
                <div className={styles.food_description}>
                    <h2 className={styles.food_heading}>Food Menu Item 4</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, pariatur!</p>
                    <p className={styles.food_price}> Price: &#8377; 550</p>
                </div>
            </div>
            <div className={styles.food_menu_item}>
                <div className={styles.food_image}>
                    <img src="./Images/food-menu5.jpg" alt=""/>
                </div>
                <div className={styles.food_description}>
                    <h2 className={styles.food_heading}>Food Menu Item 5</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, pariatur!</p>
                    <p className={styles.food_price}> Price: &#8377; 660</p>
                </div>
            </div>
            <div className={styles.food_menu_item}>
                <div className={styles.food_image}>
                    <img src="./Images/food-menu6.jpg" alt=""/>
                </div>
                <div className={styles.food_description}>
                    <h2 className={styles.food_heading}>Food Menu Item 6</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, pariatur!</p>
                    <p className={styles.food_price}> Price: &#8377; 1000</p>
                </div>
            </div>

        </div>

     </section>
    </div>
  )
}

export default SecondPage