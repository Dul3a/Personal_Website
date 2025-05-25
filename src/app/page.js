'use client';

import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1500,
      smooth: "easeInOutExpo"
    });
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <div className={styles.page}>
      <motion.nav 
        className={styles.navbar}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className={styles.logo}
          onClick={scrollToTop}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Dulea Andrei
        </motion.div>
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="achievements"
              spy={true}
              smooth="easeInOutCubic"
              duration={1200}
              offset={-100}
              className={styles.navButton}
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="projects"
              spy={true}
              smooth="easeInOutCubic"
              duration={1200}
              offset={-100}
              className={styles.navButton}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth="easeInOutExpo"
              duration={1700}
              offset={-100}
              className={styles.navButton}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      <main className={styles.main}>
        <motion.div 
          className={styles.hero}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>Dulea Andrei</motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            A high school student with a passion for learning and a love for technology.
          </motion.p>
        </motion.div>

        <motion.section 
          id="achievements"
          className={styles.experience}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>Achievements</motion.h2>
          <motion.div className={styles.timeline} variants={containerVariants}>
            <motion.div className={styles.timelineItem} variants={itemVariants}>
              <div className={styles.timelineDate}>Present - 2025 (11ᵗʰ grade)</div>
              <div className={styles.timelineContent}>
                <h3>Science</h3>
                <p>🥇 First place at the PerformSTEM Competition</p> <br></br>

                <h3>Computer science</h3>
                <p>🏆 First place at the county phase of the InfoEducatie Olympiad, qualified to the national phase</p> <br></br>

                <h3>Computer science</h3>
                <p>🥇 Gold medal at the National Olympiad of Artificial Intelligence (ONIA), qualified for the Romanian National Training Camp (extended team)</p> <br></br>

                <h3>Interdisciplinary / Project-Based Learning</h3>
                <p>📣 Participated at the national phase of the "Made for Europe" National Contest. Developed an educational website as a final product 
                  of an Erasmus+ project, combining web development skills with intercultural and civic education.</p> <br></br>

                <h3>Computer science</h3>
                <p>🏆 First place at the the county phase of the National Olympiad of Artificial Intelligence (OJIA), qualified to the national phase</p> <br></br>

                <h3>Computer science</h3>
                <p>🏆 Second place at the county phase of the National Olympiad in Applied Informatics - AcadNet 2025</p> <br></br>
                
                <h3>Interdisciplinary / Project-Based Learning</h3>
                <p>🏆 First place at the county phase of the "Made for Europe" National Contest, qualified to the national phase</p> <br></br>

                <h3>Computer science</h3>
                <p>📜 Honourable Mention at the Informatics Olympiad (OJI) - County Phase, 2025</p> <br></br>

                <h3>Computer science</h3>
                <p>🏆 Second place at the local phase of the National Olympiad in Applied Informatics - AcadNet 2025, qualified to the county phase</p> 
              </div>
            </motion.div><br></br>

            <motion.div className={styles.timelineItem} variants={itemVariants}>
              <div className={styles.timelineDate}>2025 - 2024 (10ᵗʰ grade)</div>
              <div className={styles.timelineContent}>
                <h3>Interdisciplinary / Project-Based Learning</h3>
                <p>🥇 First place at the I GO VET Contest - filmed and edited a 3 minute video about the importance of European Values</p> <br></br>

                <h3>Computer Science</h3>
                <p>🥈 Second place at the Educational Web Pages Contest in Setúbal, Portugal, in an Erasmus+ VET Project</p> <br></br>

                <h3>Computer Science</h3>
                <p>📜 Honourable Mention at the Informatics Olympiad (OJI) - County Phase, 2024</p> <br></br>

                <h3>Computer Science</h3>
                <p>📣 Participated in the County Round of the Romanian ICT Olympiad (OTI) - C# section</p>
              </div>
            </motion.div><br></br>

            <motion.div className={styles.timelineItem} variants={itemVariants}>
              <div className={styles.timelineDate}>2024 - 2023 (9ᵗʰ grade)</div>
              <div className={styles.timelineContent}>
                <h3>Engineering</h3>
                <p>📣 Participated at the centerstage season of the First Tech Challenge Contest in Romania</p> <br></br>

                <h3>Computer Science</h3>
                <p>📜 Honourable Mention at the Informatics Olympiad (OJI) - County Phase, 2023</p> <br></br>

                <h3>Interdisciplinary / Project-Based Learning</h3>
                <p>📣 Actively involved in the eTwinning project "Getting to know a mathematician from my country"</p>
              </div>
            </motion.div><br></br>

            <motion.div className={styles.timelineItem} variants={itemVariants}>
              <div className={styles.timelineDate}>2023 - 2022 (8ᵗʰ grade)</div>
              <div className={styles.timelineContent}>
                <h3>Interdisciplinary / Project-Based Learning</h3>
                <p>🥈 Second place at the national phase of the "Made for Europe" National Contest</p> <br></br>

                <h3>Mathematics</h3>
                <p>📜 Honourable Mention awarded at the National Mathematics Contest for Grades IV - VIII, "Romanian Villages Olympiad", county stage</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="projects"
          className={styles.projects}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>Projects</motion.h2>
          <motion.div className={styles.projectGrid} variants={containerVariants}>
            <motion.a 
              href="https://www.onlinestudy.ro/vet/2024/Dulea-Andrei/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3>L2C++</h3>
              <p>Educational platform dedicated to C++ learning, offering interactive and efficients ways of teaching</p>
            </motion.a>
            <motion.div 
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3>Project Two</h3>
              <p>To complete...</p>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer 
        id="contact" 
        className={styles.footer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.contactInfo} variants={itemVariants}>
          <h2>Contact</h2>
          <p>Feel free to contact me at <b>dulea.tech@gmail.com</b></p>
          <motion.div 
            className={styles.socialLinks}
            variants={containerVariants}
          >
            <motion.a 
              href="https://github.com/Dul3a" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/dulea.exe/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Instagram
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/andrei-dulea-004671367/" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className={styles.copyright}
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Dulea Andrei. All rights reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
}
