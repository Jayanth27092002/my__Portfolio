export interface Certifications{
    name:string;
    date:string;
    isNew:boolean;
    description:string;
    imageUrl:String;

}


export const CertificatesData :Certifications[]=[
    {

        name:"AWS Certified Cloud Practitoner",
        date:"29-12-24",
        isNew:true,
        description:"Foundational Certification in AWS cloud Architecture",
        imageUrl:"https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    }
]




