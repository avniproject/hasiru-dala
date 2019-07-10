import {
    RuleFactory,
    FormElementsStatusHelper,
    FormElementStatusBuilder,
    StatusBuilderAnnotationFactory,
    WithStatusBuilder,
    FormElementStatus,
    VisitScheduleBuilder,
    ProgramRule,
    RuleCondition,
    WithName
} from 'rules-config/rules';


const WithRegistrationStatusBuilder = StatusBuilderAnnotationFactory('individual', 'formElement');
const RegistrationViewFilter = RuleFactory("8dd651b2-4cba-4f5a-8453-d7ab1f2d4c70", "ViewFilter");


@RegistrationViewFilter("f33f4ded-3d29-4037-8610-3fdb037db578", "Hasiru Dala Registration View Filter", 100.0, {})
class RegistrationViewHandlerHasiruDala {
    static exec(individual, formElementGroup) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new RegistrationViewHandlerHasiruDala(), individual, formElementGroup);
    }

    @WithRegistrationStatusBuilder
    pleaseSelectTheClassCourse([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Are you studying presently?").is.yes;
    }

    @WithRegistrationStatusBuilder
    pleaseSelectTheReasonSForDiscontinuation([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Are you studying presently?").is.no;
    }

    @WithRegistrationStatusBuilder
    pleaseEnterDetailsOfYourSkillVocationalTraining([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Please select the class/course").containsAnswerConceptName("Other: Skill/Vocational Training");
    }

    @WithRegistrationStatusBuilder
    pleaseEnterDetails([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have any physical disability?").is.yes;
    }

    @WithRegistrationStatusBuilder
    doYouHaveADoctorsCertificateIndicatingThePercentageOfDisability([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have any physical disability?").is.yes;
    }

    @WithRegistrationStatusBuilder
    pleaseUploadTheDoctorsCertificate([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a doctor's certificate indicating the percentage of disability?").is.yes;
    }

    @WithName("Do you have an Occupational ID card?")
    @WithRegistrationStatusBuilder
    abc16([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Type of Informal Waste Worker")
    @WithRegistrationStatusBuilder
    abc17([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Do you have any additional jobs?")
    @WithRegistrationStatusBuilder
    abc17a([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Please provide details")
    @WithRegistrationStatusBuilder
    abc17b([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have any additional jobs?")
        .containsAnswerConceptName("Any Other");
    }

    @WithName("How long have you been picking waste/buying waste? (Please mention the number of years and months)")
    @WithRegistrationStatusBuilder
    abc18([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Are you a member of any organization?")
    @WithRegistrationStatusBuilder
    abc19([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Do you have a bank account?")
    @WithRegistrationStatusBuilder
    abc20([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Do you have a post office SB account?")
    @WithRegistrationStatusBuilder
    abc21([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Do you have access to loans from banks/other schemes?")
    @WithRegistrationStatusBuilder
    abc22([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Have you undergone any of the following trainings?")
    @WithRegistrationStatusBuilder
    abc23([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Introduced by (Name)")
    @WithRegistrationStatusBuilder
    abc27([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Designation of Introducer")
    @WithRegistrationStatusBuilder
    abc28([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Whether you have Voter Registration Card")
    @WithRegistrationStatusBuilder
    Employment1([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

    @WithName("Whether you have Ration/BPL Card")
    @WithRegistrationStatusBuilder
    Employment2([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

    @WithName("Whether you have Aadhar Card")
    @WithRegistrationStatusBuilder
    Employment3([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

    @WithName("Whether you have Aadhar Enrolment Card")
    @WithRegistrationStatusBuilder
    Employment4([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

    @WithName("Whether you have Labour Card")
    @WithRegistrationStatusBuilder
    Employment5([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

 @WithName("Whether you have Health Card")
    @WithRegistrationStatusBuilder
    Employment6([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

    @WithName("Whether you have PAN Card")
    @WithRegistrationStatusBuilder
    Employment7([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

    @WithName("Whether you have any other ID Cards")
    @WithRegistrationStatusBuilder
    Employment8([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Please choose your employment type")
         .containsAnyAnswerConceptName("Informal waste worker","Informal Sanitation worker","Other","Unemployed");
     }

    @WithRegistrationStatusBuilder
    voterRegistrationCardNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Voter Registration Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    voterRegistrationCardPhoto([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Voter Registration Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    rationBplCardNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Ration/BPL Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    rationBplCardPhoto([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Ration/BPL Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    aadharCardNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Aadhar Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    aadharCardPhoto([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Aadhar Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    aadharEnrolmentCardNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Aadhar Enrolment Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    aadharEnrolmentCardPhoto([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Aadhar Enrolment Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    labourCardNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Labour Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    labourCardPhoto([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Labour Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    healthCardNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Health Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    healthCardPhoto([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have Health Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    panCardNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have PAN Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    panCardPhoto([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have PAN Card").is.yes;
    }

    @WithRegistrationStatusBuilder
    cardNumberOfOtherId1([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameSchemeOfOtherId1([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    
    @WithRegistrationStatusBuilder
    photoOfOtherId1([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    cardNumberOfOtherId2([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }
    

    @WithRegistrationStatusBuilder
    nameSchemeOfOtherId2([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    photoOfOtherId2([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    cardNumberOfOtherId3([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameSchemeOfOtherId3([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    photoOfOtherId3([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    cardNumberOfOtherId4([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameSchemeOfOtherId4([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    photoOfOtherId4([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
    }

    @WithRegistrationStatusBuilder
    occupationalIdNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have an Occupational ID card?").is.yes;
    }

    @WithRegistrationStatusBuilder
    uploadPhotoOfTheId([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have an Occupational ID card?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheOrganization1([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Are you a member of any organization?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheOrganization2([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Are you a member of any organization?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheOrganization3([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Are you a member of any organization?").is.yes;
    }


    @WithRegistrationStatusBuilder
    fullNameAsOnTheAccountForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    typeOfAccountForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    accountNumberForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    ifscCodeForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    micrCodeForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheBankForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheBranchForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    uploadPhotoOfFirstPageOfPassbookForBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    fullNameAsOnTheAccountForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    typeOfAccountForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    accountNumberForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    ifscCodeForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    micrCodeForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheBankForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheBranchForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    uploadPhotoOfFirstPageOfPassbookForPostOffice([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a post office SB account?").is.yes;
    }

    @WithName("How often do you collect scrap/go waste picking?")
    @WithRegistrationStatusBuilder
    ibSd1([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Itinerant buyer","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("How do you pick waste?")
    @WithRegistrationStatusBuilder
    ibSd2([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("What are the kinds of waste you pick/sort?")
    @WithRegistrationStatusBuilder
    ibSd3([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("Others")
    @WithRegistrationStatusBuilder
    ibSd4([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("Name of scrap dealer:")
    @WithRegistrationStatusBuilder
    ibSd6([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Itinerant buyer","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("Address of scrap dealer")
    @WithRegistrationStatusBuilder
    ibSd7([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Itinerant buyer","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("Phone number of scrap dealer")
    @WithRegistrationStatusBuilder
    ibSd8([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Itinerant buyer","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("How much do you earn?")
    @WithRegistrationStatusBuilder
    ibSd9([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Itinerant buyer","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("How do you transport your collected waste?")
    @WithRegistrationStatusBuilder
    ibSd10([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnyAnswerConceptName("Wastepicker","Itinerant buyer","Sorters at scrap shops","Sorters at DWCC","Waste collectors on ULB Autorickshaws/trucks");
     }

    @WithName("If motorised vehicle then what is your daily expenditure on transport?")
    @WithRegistrationStatusBuilder
    abc6a([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you transport your collected waste?")
        .containsAnswerConceptName("Motorised vehicle");
    }

    @WithName("Where do you buy your scrap from?")
    @WithRegistrationStatusBuilder
    itinerantBuyer2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Please list any other place you buy scrap from")
    @WithRegistrationStatusBuilder
    itinerantBuyer3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Where do you buy your scrap from?")
        .containsAnswerConceptName("Other");
    }

    @WithName("What is your daily capital?")
    @WithRegistrationStatusBuilder
    itinerantBuyer4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Who provides it?")
    @WithRegistrationStatusBuilder
    itinerantBuyer5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Any Other :")
    @WithRegistrationStatusBuilder
    itinerantBuyer6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("How much Paper-White waste you buy per week in (Kg)?")
    @WithRegistrationStatusBuilder
    itinerantBuyer7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("How much News paper waste you buy per week in (Kg)?")
    @WithRegistrationStatusBuilder
    itinerantBuyer8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("How much Plastic waste you buy per week in (Kg)?")
    @WithRegistrationStatusBuilder
    itinerantBuyer9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("How much Bottles waste you buy per week in (Kg)?")
    @WithRegistrationStatusBuilder
    itinerantBuyer10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("How much Metal waste you buy per week in (Kg)?")
    @WithRegistrationStatusBuilder
    itinerantBuyer11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("How much Computer and other E-Waste waste you buy per week in (Kg)?")
    @WithRegistrationStatusBuilder
    itinerantBuyer12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Do you collect any other type of waste")
    @WithRegistrationStatusBuilder
    itinerantBuyer13([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithRegistrationStatusBuilder
    typeOfWaste([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you collect any other type of waste").is.yes;
    }

    @WithRegistrationStatusBuilder
    pleaseSpecifyInKg([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you collect any other type of waste").is.yes;
    }

    @WithName("No. of shops you run/own/manage")
    @WithRegistrationStatusBuilder
    ScrapDealer1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Size of the shop: in sq ft")
    @WithRegistrationStatusBuilder
    ScrapDealer2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Maximum Storage Capacity")
    @WithRegistrationStatusBuilder
    ScrapDealer3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("How many sorters do you employ?")
    @WithRegistrationStatusBuilder
    ScrapDealer4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("What are your main constraints or challenges?")
    @WithRegistrationStatusBuilder
    ScrapDealer5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Where do you get help for capital?")
    @WithRegistrationStatusBuilder
    ScrapDealer6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("What is the kind of support you feel if provided to you, would help to improve your business?")
    @WithRegistrationStatusBuilder
    ScrapDealer7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Do you need any license to operate?")
    @WithRegistrationStatusBuilder
    ScrapDealer8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Do you have any license")
    @WithRegistrationStatusBuilder
    ScrapDealer9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Glass Quarter Bottles waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer10([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnswerConceptName("Scrap Dealer");
     }

    @WithName("Glass Beer bottles waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Glass waste sold per week in Kg")
     @WithRegistrationStatusBuilder
     ScrapDealer12([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnswerConceptName("Scrap Dealer");
     }

    @WithName("Metal Ferrous Metals/Iron waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer13([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnswerConceptName("Scrap Dealer");
     }

    @WithName("Metal Copper waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer14([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Aluminum waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer15([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Other Metals waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer16([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Batteries waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer17([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Brass waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer18([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnswerConceptName("Scrap Dealer");
     }

    @WithName("Metal Mercury waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer19([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper Cardboard/Corrugated boxes waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer20([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper White Paper/White Record waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer21([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper Road scrap paper waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer22([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper Tetrapak waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer23([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics PET (Pearlpet) waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer24([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Hard Plastic items (cassette covers) waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer25([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Soft Plastic items (Buckets) waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer26([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Soft Plastic, Chappal, soles waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer27([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnswerConceptName("Scrap Dealer");
     }

    @WithName("Plastics Milk Bags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer28([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnswerConceptName("Scrap Dealer");
     }

    @WithName("Plastics LD Plastic bags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer29([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Thin Plastic bags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer30([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics White Plastic waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer31([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Rubber waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer32([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Textiles/Rags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer33([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Tin waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer34([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Thermocol/Styrofoam waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    ScrapDealer35([], statusBuilder) {
         statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
         .containsAnswerConceptName("Scrap Dealer");
     }

}



module.exports = {RegistrationViewHandlerHasiruDala};

