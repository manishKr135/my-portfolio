import { Component } from '@angular/core';
import { CHEGG_ICON, TCS_ICON, DELOITTE_ICON } from 'src/app/shared/constants/constants';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      companyName: 'Deloitte',
      duration: '2024 - Present',
      designation: 'Consultant',
      work: [
        'Led the development of a web application using Salesforce Aura and LWC',
        'Collaborated with cross-functional teams to gather requirements and deliver high-quality solutions.',
      ],
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQGNtpblgQpJoQ/company-logo_100_100/company-logo_100_100/0/1662120928214/deloitte_logo?e=1756339200&v=beta&t=k0MFr6h2lCNOSH8euwi1GxgE5QE_NXTJxrtLhcdJnSw',
    },
    {
      companyName: 'Tata Consultancy Services',
      duration: '2021 - 2024',
      designation: 'Systems Engineer',
      work: [
        'Developed multiple reusable components, resulting in a 30% reduction in development time.',
        'Managed a team of 4 people, increasing overall productivity by 40%.',
        'Migrated a web application running on Angular version 8 to version 16.',
        'Gained hands-on experience with multiple AWS services.',
        'Became familiar with Azure DevOps.',
        'Designed multiple multipurpose Content types in Contentful, saving 10% of authoring time.',
        'Increased client satisfaction by 25% through effective communication and issue resolution.',
        'Successfully managed multiple client projects simultaneously, resulting in a 30% increase in client retention.',
      ],
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGsGR9p4ikS5w/company-logo_100_100/company-logo_100_100/0/1708946550425/tata_consultancy_services_logo?e=1756339200&v=beta&t=xEPhI60x4ilcVyzuwMbYufMbIMIaSMPhECEd7tDjZio',
    },
    {
      companyName: 'Chegg India',
      duration: '2019 - 2020',
      designation: 'Subject Matter Expert (CS)',
      work: [
        'Provided detailed explanation and solved more than 200 coding problems.',
      ],
      logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGrZGuUpN9MWQ/company-logo_100_100-alternative/company-logo_100_100-alternative/0/1630552136362/cheggindia_logo?e=1756339200&v=beta&t=c1lyAcLyHtCs1BUW9smRX5NJQGOWwUrSmFGLT55h_NI',
    },
  ];
}
