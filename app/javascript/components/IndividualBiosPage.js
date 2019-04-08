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
          [ {
            name: "Aria Chernik",
            team: "Faculty Lead",
            study: "Duke Lecturing Fellow, Social Science Research Institute and Founder and Director, Open Source Pedagogy, Research + Innovation (OSPRI)",
            caption: "I believe that everyone has a right to empowering education, and that designing a dynamic ecosystem for engaged, lifelong learning is our best hope for creating a more empathetic, collaborative, and peaceful world.",
            email: "aria.chernik@duke.edu",
            myImage: "https://farm8.staticflickr.com/7896/46405637515_32d14f2525_q.jpg",
            emailurl: "mailto:aria.chernik@duke.edu",
            linkedinurl: "https://www.linkedin.com/in/ariachernik/"
          },{
            name:"Amy Jiang",
            team:"Teaching Team Leader",
            study: "Duke Public Policy, 2020",
            caption:"I grew up believing that I could be anyone and learn anything. At some point in my schooling, I lost this feeling in STEM courses. I want all young people to not only believe but also be validated in their learning journey. I'm at CSbyUs working on this mission.",
            email: "sj214@duke.edu",
            myImage: "https://farm8.staticflickr.com/7859/47268067852_9896c8a123_q.jpg",
            emailurl: "mailto:sj214@duke.edu",
            linkedinurl: "https://www.linkedin.com/in/gobluedevils/"
          },{
            name:"Carter Zenke",
            team:"Curriculum R&D Team Leader, Teaching Team",
            study: "Duke Digital Era Education, 2020",
            caption:"Computer science education opens the digital era’s door to opportunity. I believe every student has a right to an education that will prepare them to thrive in their world.",
            email: "carter.zenke@duke.edu",
            myImage: "https://farm8.staticflickr.com/7887/33444721758_3e9e741bae_q.jpg",
            emailurl: "mailto:carter.zenke@duke.edu",
            linkedinurl: "google.com"
          },{
            name:"Tanner Johnson",
            team:"Technology R&D Team Leader",
            study: "Duke Computer Science, 2018",
            caption:"Computer science education is essential to fully participate in the 21st century. I still remember how empowered I felt after my first “Hello, World” Python program. I’m here because I’m constantly motivated by a team of driven individuals, and I want to make it easier for teachers to bring “Hello, World” moments of confidence to their learners.",
            email: "johnsontanner3@gmail.com",
            myImage: "https://farm8.staticflickr.com/7859/33640729318_482cbc78a7.jpg",
            emailurl: "mailto:johnsontanner3@gmail.com",
            linkedinurl: "https://www.linkedin.com/in/tanner-johnson-4ba701b8/"
          },{
            name:"Bozhena Etin",
            team:"Curriculum R&D Team Leader, Project Manager for CSbyUs",
            study: "Duke General Liberal Studies, Graduate Student",
            caption:"CSbyUS is a unique opportunity for me to be part of a team that creates, implements and delivers a program that is impactful on the community of young people.",
            email: "bozhena.etin@duke.edu",
            myImage: "https://farm8.staticflickr.com/7862/47268067682_ab9dceb352_q.jpg",
            emailurl: "mailto:bozhena.etin@duke.edu"
          },{
            name:"Brian Njoroge",
            team:"Curriculum R&D Team",
            study: "Duke Public Policy & International Comparative Studies, 2020",
            caption:"I believe that creating not only diverse but also inclusive classrooms is one of the ways to provide equal education opportunities to students regardless of their background, and CSbyUs is dedicated to this cause by teaching CS while incorporating social justice issues in its curriculum.",
            email: "brian.njoroge@duke.edu",
            myImage: "https://farm8.staticflickr.com/7899/47268067742_6e2595c1ac_q.jpg",
            emailurl: "mailto:brian.njoroge@duke.edu",
            linkedinurl: "http://linkedin.com/in/brian-njoroge-167654102"
          },{
            name:"Daniel Yoontae Hwang",
            team:"Curriculum R&D Team, Teaching Team",
            study: "Duke Mathematics & Computer Science, 2022",
            caption:"I joined CSbyUs because I saw a need for CS classes that bring critical thinking skills to students of all backgrounds, while encouraging these children to be creative and design projects that truly spoke to their needs. I hope my work through CSbyUs will work to marry these two sides together into an engaging and effective education.",
            email: "daniel.hwang@duke.edu",
            myImage: "https://farm8.staticflickr.com/7903/47268067792_05f58bd204_q.jpg",
            emailurl: "mailto:daniel.hwang@duke.edu",
            linkedinurl: "https://www.linkedin.com/in/daniel-hwang-32751a181/"
          },{
            name:"Eliza Paradise",
            team:"Teaching Team, Technology R&D Team",
            study: "Duke Computer Science & Global Health, 2021",
            caption:"I joined this team because I am passionate about using technology to address inequities in health and education. I believe that our mission of creating open-source technology and computer science curricula is central to making computer science a more equitable and inviting field.",
            email: "ecp25@duke.edu",
            myImage: "https://farm8.staticflickr.com/7844/33444721858_3fc9e891ba_m.jpg",
            emailurl: "mailto:ecp25@duke.edu",
            linkedinurl: "https://www.linkedin.com/in/eliza-paradise-8b863512b/"
          },{
            name:"Faven Getahun",
            team:"Curriculum R&D Team, Teaching Team",
            study: "Duke Political Science, 2020",
            caption:"I joined CSbyUs because while Computer Science has this potential for being a great equalizer, we can’t sit back and hope these changes will happen on their own. If we don’t make a conscious effort to increase access to CS, we risk widening the achievement gap already present.",
            email: "faven.getahun@duke.edu",
            myImage: "https://farm8.staticflickr.com/7909/32378612747_0d241bb7d4_q.jpg",
            emailurl: "mailto:faven.getahun@duke.edu",
            linkedinurl: "google.com"
          },{
            name:"Hayley Barton",
            team:"Curriculum R&D Team",
            study: "Duke Economics, 2019",
            caption:"I believe that educational equity is extremely important for reducing economic inequality. In an increasingly digital world, Computer Science education is especially important to ensure that innovation doesn’t increase the technology gap. I love collaborating with CSbyUs to work toward this vision.",
            email: "hayley.barton@duke.edu",
            myImage: "https://media.licdn.com/dms/image/C4E03AQEWorukaFCdEQ/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=VtX5lfZSx8fvlb5O56ylLw7Tt9h-_co7CmnMFQ5DX1M",
            emailurl: "mailto:hayley.barton@duke.edu",
            linkedinurl: "https://www.linkedin.com/in/hayley-barton/"
          },{
            name:"Jay Patel",
            team:"Teaching Team, Curriculum R&D Team",
            study: "Duke Computer Science, 2021",
            caption:"I was raised in a small town in rural East Texas with no access to computer science education. I want to help make learning computer science more accessible for students in towns and schools with less resources than others and hope to do so by working with CSbyUs.",
            email: "j.patel@duke.edu",
            myImage: "https://farm8.staticflickr.com/7824/33444721778_86ba9abc5f_q.jpg",
            emailurl: "mailto:j.patel@duke.edu",
            linkedinurl: "http://linkedin.com/in/jay-p-patel"
          },{
            name:"Judyth Estrada Salinas",
            team:"Technology R&D Team, Teaching Team",
            study: "Duke Computer Science, 2020",
            caption:"I joined CSbyUs because I care about helping everyone, regardless of SES, race or background, to be able to fall in love with CS liked I did!",
            email: "judyth.estrada.salinas@duke.edu",
            myImage: "https://farm8.staticflickr.com/7845/47268067922_d90fec6fc0_q.jpg",
            emailurl: "mailto:judyth.estrada.salinas@duke.edu",
            linkedinurl: "google.com"
          },{
            name:"Lanre Oshin",
            team:"Teaching Team, Design Team",
            study: "Computer Science, 2019",
            caption:"Coming from a humble background, computer science has provided me with the opportunity to pursue careers that I never thought I’d have the chance to . This opportunity is available to many students, but not equally. I joined this team to help address the problem of lack of diversity in computer science, and the lack of encouragement to pursue a career in this field in underprivileged schools.",
            email: "lanre.oshin@duke.edu",
            myImage: "https://farm8.staticflickr.com/7892/33444721738_a2819292a7_q.jpg",
            emailurl: "mailto:lanre.oshin@duke.edu",
            linkedinurl: "google.com"
          },{
            name:"Megan Phibbons",
            team:"Technology R&D Team",
            study: "Duke Computer Science, 2021",
            caption:"I have always been very passionate about both computer science and education, so I was looking for a way to combine my passions and find a way to help people with their educations. I also wanted some experience with web development, and this team was the perfect place to start learning about that!",
            email: "megan.phibbons@gmail.com",
            myImage: "https://farm8.staticflickr.com/7881/47268067562_fe0067d348_q.jpg",
            emailurl: "mailto:megan.phibbons@gmail.edu",
            linkedinurl: "https://www.linkedin.com/in/meganphibbons/"
          },{
            name:"Nick Turecky",
            team:"Teaching Team",
            study: "Duke Visual and Media Studies, 2021",
            caption:"For the vast majority of my education, I never had the opportunity to take computer science classes because they weren’t offered in my schools. In today’s world, I believe it is essential that all students have access to a CS education at an early age. I think the unique problem-solving aspects that CS brings to education really strengthen and refresh the learning process.",
            email: "nicholas.turecky@duke.edu",
            myImage: "https://farm8.staticflickr.com/7846/33444721818_504397cfba_q.jpg",
            emailurl: "mailto:nicholas.turecky@duke.edu",
            linkedinurl: "google.com"
          },{
            name:"Vivian Kirby",
            team:"Technology R&D Team",
            study: "Duke Computer Science & Mathematics, 2021",
            caption:"I’d always been fascinated by computer science as a concept, but I never had the confidence to even take a CS course until college because it was (and continues to be) such a male-dominated field. Looking back, I wish so badly that I’d been exposed to CS sooner. I joined CSbyUs because I don’t want anyone to have barriers holding them back from exploring the field of tech, and early exposure is the best way to accomplish that goal.",
            email: "vivian.kirby@duke.edu",
            myImage: "https://farm8.staticflickr.com/7901/32378612597_ab9dceb352_q.jpg",
            emailurl: "mailto:vivian.kirby@duke.edu",
            linkedinurl: "https://www.linkedin.com/in/vivian-kirby-482b29127/"
          },{
            name:"Yeonju Suh",
            team:"Curriculum R&D Team",
            study: "Duke Psychology, 2020",
            caption:"Some problems in education come from societal factors. Others come from a faulty curriculum. I aspire to address both issues through building an inclusive computer science curriculum that encourages and supports our students.",
            email: "yeon.ju.suh@duke.edu",
            myImage: "https://farm8.staticflickr.com/7854/33444721688_66b3752232_q.jpg",
            emailurl: "mailto:yeon.ju.suh@duke.edu",
            linkedinurl: "https://www.linkedin.com/in/yeonju-suh-a55b11135/"
          }
            ];

      const cards = data.map((card) =>
          <IndividualBioCard
          name = {card.name}
          team = {card.team}
          study = {card.study}
          caption = {card.caption}
          email = {card.email}
          myImage = {card.myImage}
          emailurl = {card.emailurl} 
          linkedinurl = {card.linkedinurl} />
      );



    return (
        //TODO: see if this works
        <React.Fragment>
          <CssBaseline/>
          <Paper className={classes.meetUsTitle}>
            <Typography color="inherit" align="center" variant="h1" marked="center" className={classes.orangeFont} >
              Meet <b>Us</b>
            </Typography>
          </Paper>
          <div className={classes.root2}>
            <main className={classes.layout2}>

              <Grid container spacing={24} justify="center">
                  {cards.map(card => (
                    // two cards per row xs={3}
                    <Grid item xs={12} sm={6} key={card.toString()}>
                     {/*<Grid item style={{ textAlign: 'center' }} xs={12} sm={6} md={4} key={card.toString()}>8*/}
                         {card}
                     </Grid>
                   ))}
             </Grid>
            </main>
          </div>
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(IndividualBiosPage);
