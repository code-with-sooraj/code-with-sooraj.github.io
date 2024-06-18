import styles from './ProjectsStyles.module.css';
import moto from '../../assets/Motor-Bike-PNG-Pic.png';
import student from '../../assets/student.jpeg';
import bat from '../../assets/bat.jpeg';
import feed from '../../assets/feedback.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={moto}
          link="https://github.com/code-with-sooraj/Ride-karo"
          h3="Ride karo"
          p="Bike Rental App"
        />
        <ProjectCard
          src={student}
          link="https://github.com/code-with-sooraj/Student-placement-prediction"
          h3="Placement Predictor"
          p="Student Placement Prediction"
        />
        <ProjectCard
          src={bat}
          link="https://github.com/code-with-sooraj/Cricket-tournament-and-shop"
          h3="Cricket Duniya"
          p="Cricket Tournament and Shop"
        />
        <ProjectCard
          src={feed}
          link="https://github.com/code-with-sooraj/feedback-form"
          h3="Feedback"
          p="Feedback and Counselling"
        />
      </div>
    </section>
  );
}

export default Projects;
