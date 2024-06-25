import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    {
      companyName: "Tata Consultancy Services",
      duration: '2021 - Present',
      designation: 'Systems Engineer',
      work: [
        "Developed multiple reusable components, resulting in a 30% reduction in development time.",
        "Managed a team of 4 people, increasing overall productivity by 40%.",
        "Migrated a web application running on Angular version 8 to version 16.",
        "Gained hands-on experience with multiple AWS services.",
        "Became familiar with Azure DevOps (running build pipeline, creating release, deploying to different environments up to Production).",
        "Designed multiple multipurpose Content types in Contentful, saving 10% of authoring time.",
        "Increased client satisfaction by 25% through effective communication and issue resolution.",
        "Successfully managed multiple client projects simultaneously, resulting in a 30% increase in client retention."
      ],
      logo: "https://media.licdn.com/dms/image/D4D0BAQGsGR9p4ikS5w/company-logo_100_100/0/1708946550425/tata_consultancy_services_logo?e=1727308800&v=beta&t=RiZPwdYM3xse4gcBRmE4B3kMkNaBznOVtv-Fo0CefrM"
    },
    {
      companyName: "Chegg India",
      duration: '2019 - 2020',
      designation: 'Subject Matter Expert (CS)',
      work: [
        "Provided detailed explanation and solved more than 200 coding problems."
      ],
      logo: "https://media.licdn.com/dms/image/C4D0BAQGrZGuUpN9MWQ/company-logo_100_100-alternative/0/1630552136362/cheggindia_logo?e=1727308800&v=beta&t=dStm3nQO0Xom0duXBYcnfTJVUmv4MuXuGn0X6CGK7R0"
    },
  ];

}
