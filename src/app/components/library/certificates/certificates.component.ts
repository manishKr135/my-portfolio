import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificationDetials = [
    {
      certificateName: 'Certified Angular Developer',
      certificateDescription: `By completing this course, I have demonstrated my proficiency in Angular development and have earned the Edureka Angular Developer certification. This certification is recognized industry-wide and can be added to your resume, LinkedIn profile, and other professional platforms.`,
      certificateImage: 'https://www.edureka.co/certificate/9e01527d939c9bb017f6243d4330f630.jpeg?ver=6678686946076',
      certificateType: 'Certificate of Completion'
    },
    {
      certificateName: 'Ultimate AWS Certified Solutions Architect Associate SAA-C03',
      certificateDescription: `This comprehensive course is designed to help you prepare for the AWS Certified Solutions Architect - Associate (SAA-C03) exam. You'll learn how to design and deploy scalable, secure, and efficient cloud architectures on AWS, and how to migrate existing applications to the cloud.`,
      certificateImage: 'https://udemy-certificate.s3.amazonaws.com/image/UC-4a3dd5b5-931e-4b72-86d9-270ea869b656.jpg?v=1718428604000',
      certificateType: 'Certificate of Completion'
    },
  ];
}
