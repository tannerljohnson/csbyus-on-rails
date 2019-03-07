import React from "react"
import PropTypes from "prop-types"
import IndividualBioCard from "./IndividualBioCard"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

class IndividualBiosPage extends React.Component {

  render () {
      const { classes } = this.props;

      const data =
          [
          {
            name:"Judyth Estrada Salinas",
            team:"Technology R&D Team, Teaching Team",
            study: "Computer Science, 2020",
            caption:"I joined CSByUs because I care about helping everyone, regardless of SES, race or background, to be able to fall in love with CS liked I did!",
            email: "judyth.estrada.salinas@duke.edu",
            myImage: "https://www.flickr.com/photos/jenyplante/3446613250/in/photolist-6fyN3o-e4tVne-eCkEJr-qqaNtq-oVRSyp-oz5djU-aAS1rA-e1cRoR-6QyoFa-b1KpiT-aPEvAM-9Yu5nB-o7XMqu-cMYDsL-jFT39p-oVYgms-fy5Ru8-qQE6qw-4Kdy2n-njnDFt-mA84br-pHm3zV-d77Hry-qThrXB-gkXxhP-a2nbJL-mynq9k-b7KW1H-gSrXqe-nruRAE-qYtPbE-9xkdrH-c9aaZY-h75Auf-4zMES9-7FeET9-mnZM4n-9Jepiz-6fuBPk-aj7MPT-nDgPsh-7ZPPJi-aWXxCg-6fuACV-s9Y9eq-eHKdAs-krYN3R-9YYybK-nQvC1M-fSv1pw"
          },{
            name:"Amy Jiang",
            team:"Teaching Team Leader",
            study: "Public Policy, 2020",
            caption:"I grew up believing that I could be anyone and learn anything. At some point in my schooling, I lost this feeling in STEM courses. I want all young people to not only believe but also be validated in their learning journey. I'm at CSByUs working on this mission",
            email: "sj214@duke.edu",
            myImage: "https://www.flickr.com/photos/trevmepix/8572035019/in/photolist-e4tVne-eCkEJr-qqaNtq-oVRSyp-oz5djU-aAS1rA-e1cRoR-6QyoFa-b1KpiT-aPEvAM-9Yu5nB-o7XMqu-cMYDsL-jFT39p-oVYgms-fy5Ru8-qQE6qw-4Kdy2n-njnDFt-mA84br-pHm3zV-d77Hry-qThrXB-gkXxhP-a2nbJL-mynq9k-b7KW1H-gSrXqe-nruRAE-qYtPbE-9xkdrH-c9aaZY-h75Auf-4zMES9-7FeET9-mnZM4n-9Jepiz-6fuBPk-aj7MPT-nDgPsh-7ZPPJi-aWXxCg-6fuACV-s9Y9eq-eHKdAs-krYN3R-9YYybK-nQvC1M-fSv1pw-iQ3mmN"
          },{
            name:"Daniel Yoontae Hwang",
            team:"Curriculum R&D Team, Teaching Team",
            study: "Mathematics & Computer Science, 2022",
            caption:"I joined CSByUs because I saw a need for CS classes that bring critical thinking skills to students of all backgrounds, while encouraging these children to be creative and design projects that truly spoke to their needs. I hope my work through CSByUs will work to marry these two sides together into an engaging and effective education.",
            email: "daniel.hwang@duke.edu",
            myImage: "https://www.flickr.com/photos/21644167@N04/8943869261/in/photolist-eCkEJr-qqaNtq-oVRSyp-oz5djU-aAS1rA-e1cRoR-6QyoFa-b1KpiT-aPEvAM-9Yu5nB-o7XMqu-cMYDsL-jFT39p-oVYgms-fy5Ru8-qQE6qw-4Kdy2n-njnDFt-mA84br-pHm3zV-d77Hry-qThrXB-gkXxhP-a2nbJL-mynq9k-b7KW1H-gSrXqe-nruRAE-qYtPbE-9xkdrH-c9aaZY-h75Auf-4zMES9-7FeET9-mnZM4n-9Jepiz-6fuBPk-aj7MPT-nDgPsh-7ZPPJi-aWXxCg-6fuACV-s9Y9eq-eHKdAs-krYN3R-9YYybK-nQvC1M-fSv1pw-iQ3mmN-arpGL9"
          },{
            name:"Carter Zenke",
            team:"Curriculum R&D Team Leader, Teaching Team",
            study: "Digital Era Education, 2020",
            caption:"Computer science education opens the digital era’s door to opportunity. I believe every student has a right to an education that will prepare them to thrive in their world.",
            email: "carter.zenke@duke.edu",
            myImage: "https://www.flickr.com/photos/21644167@N04/8943869261/in/photolist-eCkEJr-qqaNtq-oVRSyp-oz5djU-aAS1rA-e1cRoR-6QyoFa-b1KpiT-aPEvAM-9Yu5nB-o7XMqu-cMYDsL-jFT39p-oVYgms-fy5Ru8-qQE6qw-4Kdy2n-njnDFt-mA84br-pHm3zV-d77Hry-qThrXB-gkXxhP-a2nbJL-mynq9k-b7KW1H-gSrXqe-nruRAE-qYtPbE-9xkdrH-c9aaZY-h75Auf-4zMES9-7FeET9-mnZM4n-9Jepiz-6fuBPk-aj7MPT-nDgPsh-7ZPPJi-aWXxCg-6fuACV-s9Y9eq-eHKdAs-krYN3R-9YYybK-nQvC1M-fSv1pw-iQ3mmN-arpGL9"
          },{
            name:"Bozhena Etin",
            team:"Curriculum R&D Team Leader, Project Manager for CSByUs",
            study: "General Liberal Studies, Graduate Student",
            caption:"It is exciting to be part of this interdisciplinary team that is doing research in computer science and education, creating open source curriculum and teaching the curriculum. This is a unique opportunity at Duke to be part of a team that creates, implements and delivers a product that is impactful on the community of young people.",
            email: "bozhena.etin@duke.edu",
            myImage: "https://www.flickr.com/photos/21644167@N04/8943869261/in/photolist-eCkEJr-qqaNtq-oVRSyp-oz5djU-aAS1rA-e1cRoR-6QyoFa-b1KpiT-aPEvAM-9Yu5nB-o7XMqu-cMYDsL-jFT39p-oVYgms-fy5Ru8-qQE6qw-4Kdy2n-njnDFt-mA84br-pHm3zV-d77Hry-qThrXB-gkXxhP-a2nbJL-mynq9k-b7KW1H-gSrXqe-nruRAE-qYtPbE-9xkdrH-c9aaZY-h75Auf-4zMES9-7FeET9-mnZM4n-9Jepiz-6fuBPk-aj7MPT-nDgPsh-7ZPPJi-aWXxCg-6fuACV-s9Y9eq-eHKdAs-krYN3R-9YYybK-nQvC1M-fSv1pw-iQ3mmN-arpGL9"
          },{
            name:"Faven Getahun",
            team:"Curriculum R&D Team, Teaching Team",
            study: "Political Science, 2020",
            caption:"I joined CSbyUs because while Computer Science has this potential for being a great equalizer, we can’t sit back and hope these changes will happen on their own. If we don’t make a conscious effort to increase access to CS, we risk widening the achievement gap already present.",
            email: "faven.getahun@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Brian Njoroge",
            team:"Curriculum R&D Team",
            study: "Public Policy and International Comparative Studies, 2020",
            caption:"I believe that creating not only diverse but also inclusive classrooms is one of the ways to provide equal education opportunities to students regardless of their background, and CSByUs is dedicated to this cause by teaching CS while incorporating social justice issues in its curriculum.",
            email: "brian.njoroge@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Vivian Kirby",
            team:"Technology R&D Team",
            study: "Computer Science and Mathematics, 2021",
            caption:"I’d always been fascinated by computer science as a concept, but I never had the confidence to even take a CS course until college because it was (and continues to be) such a male-dominated field. Looking back, I wish so badly that I’d been exposed to CS sooner. I joined CSbyUs because I don’t want anyone to have barriers holding them back from exploring the field of tech, and early exposure is the best way to accomplish that goal.",
            email: "vivian.kirby@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Eliza Paradise",
            team:"Teaching Team, Technology R&D Team",
            study: "Computer Science and Global Health, 2021",
            caption:"I joined this team because I am passionate about using technology to address inequities in health and education. I believe that our mission of creating open-source technology and computer science curricula is central to making computer science a more equitable and inviting field.",
            email: "ecp25@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Tanner Johnson",
            team:"Technology R&D Team Leader",
            study: "Computer Science, 2018",
            caption:"Computer science education is essential to fully participate in the 21st century. I still remember how empowered I felt after my first “Hello, World” Python program. I’m here because I’m constantly motivated by a team of driven individuals, and I want to make it easier for teachers to bring “Hello, World” moments of confidence to their learners.",
            email: "johnsontanner3@gmail.com",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Yeonju Suh",
            team:"Curriculum R&D Team",
            study: "Psychology, 2020",
            caption:"Some problems in education come from societal factors. Others come from a faulty curriculum. I aspire to address both issues through building an inclusive computer science curriculum that encourages and supports our students.",
            email: "yeon.ju.suh@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Jay Patel",
            team:"Teaching Team, Curriculum R&D Team",
            study: "Computer Science, 2021",
            caption:"I was raised in a small town in rural East Texas with no access to computer science education. I want to help make learning computer science more accessible for students in towns and schools with less resources than others and hope to do so by working with CSByUs.",
            email: "j.patel@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Lanre Oshin",
            team:"Teaching Team, Design Team",
            study: "Computer Science, 2019",
            caption:"Coming from a humble background, computer science has provided me with the opportunity to pursue careers that I never thought I’d have the chance to . This opportunity is available to many students, but not equally. I joined this team to help address the problem of lack of diversity in computer science, and the lack of encouragement to pursue a career in this field in underprivileged schools.",
            email: "lanre.oshin@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          },{
            name:"Hayley Barton",
            team:"Curriculum R&D Team",
            study: "Economics, 2019",
            caption:"I believe that educational equity is extremely important for reducing economic inequality. In an increasingly digital world, Computer Science education is especially important to ensure that innovation doesn’t increase the technology gap. I love collaborating with CSbyUs to work toward this vision.",
            email: "hayley.barton@duke.edu",
            myImage: "https://tinyurl.com/y2ujzs2e"
          }

            ];

      const cards = data.map((card) =>
          <IndividualBioCard
          name = {card.name}
          team = {card.team}
          study = {card.study}
          caption = {card.caption}
          email = {card.email}
          myImage = {card.myImage}/>
      );



    return (
        //TODO: see if this works
        <React.Fragment>
          {/*<div className={classes.layout2}>*/}
          <CssBaseline/>

              <Grid container spacing={24}>
                  {cards.map(card => (
                    // change xs setting to 12 for one card per row
                     <Grid item xs={12} sm={6} key={card.toString()}>
                         {card}
                     </Grid>
                   ))}
             </Grid>

          {/*</div>*/}
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(IndividualBiosPage);
