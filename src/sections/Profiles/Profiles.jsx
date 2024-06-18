import styles from './ProfilesStyles.module.css';
import cn from '../../assets/cn.png';
import leetcode from '../../assets/leetcode.png';
import gfg from '../../assets/gfg.png';
import codechef from '../../assets/codechef.jpeg';
import ProjectCard from '../../common/ProjectCard';
import React, { useEffect, useState } from 'react';
function Projects() {
  //Here 
  const [codechefData, setCodechefData] = useState({ ratings: '', contestsJoined: '' });

  useEffect(() => {
    const fetchCodechefData = async () => {
      try {
        const response = await fetch('http://localhost:5000/codechef'); // Adjust URL as needed
        const data = await response.json();
        setCodechefData(data);
      } catch (error) {
        console.error('Failed to fetch CodeChef data:', error);
      }
    };

    fetchCodechefData();
  }, [])
  // to here
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Coding Profiles</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={leetcode}
          link="https://leetcode.com/u/saurav4648/"
          h3="Leetcode"
          
        />
        <ProjectCard
          src={gfg}
          link="https://www.geeksforgeeks.org/user/sauravuy685f/"
          h3="GeeksForGeeks"
          
        />
        <ProjectCard
          src={cn}
          link="https://www.naukri.com/code360/profile/im_soorajkumar"
          h3="Coding Ninjas"
        />
        <ProjectCard
          src={codechef}
          link="https://www.codechef.com/users/im_soorajkumar"
          h3="Codechef"
          // p={`Ratings: ${codechefData.ratings},Contests Joined: ${codechefData.contestsJoined}`}  // ADDED
        />
      </div>
    </section>
  );
}

export default Projects;
