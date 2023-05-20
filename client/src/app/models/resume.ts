export class Resume {
    id: any;
    firstName: any;
    lastName: any;
    birthday: any;
    jobTitle: any;
    workplaces: Workplace[];
}
export class Workplace {
    id: string;
    position: any;
    companyName: any;
    industry: any;
    startDate: any;
    endDate: any;
    desctiption: any;
}