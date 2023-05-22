export class Resume {
    id: any;
    firstName: any;
    lastName: any;
    birthday: any;
    jobTitle: any;
    workplaces: Workplace[];
    education: Education[];
}
export class Workplace {
    id: string;
    position: any;
    companyName: any;
    industry: any;
    startDate: any;
    endDate: any;
    desctiption: any;
    responsabilities: any;
}
export class Education {
    id: string;
    companyName: any;
    spesialization: any;
    degree: any;
    startDate: any;
    endDate: any;
}