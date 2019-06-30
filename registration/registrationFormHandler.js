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

    @WithName("Do you have any family members/dependents living with you?")
    @WithRegistrationStatusBuilder
    abc24([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("What is his/her relationship with you")
    @WithRegistrationStatusBuilder
    abc25([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
        .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Is she/he dependent on your income?")
    @WithRegistrationStatusBuilder
    abc26([], statusBuilder) {
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
    numberOfOtherIdCards([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Whether you have any other ID Cards").is.yes;
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
    fullNameAsOnTheAccount([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    typeOfAccount([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    accountNumber([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    ifscCode([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    micrCode([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheBank([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheBranch([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithRegistrationStatusBuilder
    uploadPhotoOfFirstPageOfPassbook([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Do you have a bank account?").is.yes;
    }

    @WithName("If motorised vehicle then what is your daily expenditure on transport?")
    @WithRegistrationStatusBuilder
    abc6([], statusBuilder) {
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
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
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

    @WithName("Any Other")
    @WithRegistrationStatusBuilder
    itinerantBuyer6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("What are the amounts of waste you buy per week in Kg?")
    @WithRegistrationStatusBuilder
    itinerantBuyer7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Paper-White")
    @WithRegistrationStatusBuilder
    itinerantBuyer8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("News paper")
    @WithRegistrationStatusBuilder
    itinerantBuyer9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Plastic for Itinerant buyer")
    @WithRegistrationStatusBuilder
    itinerantBuyer10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Bottles for Itinerant buyer")
    @WithRegistrationStatusBuilder
    itinerantBuyer11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Metal for Itinerant buyer")
    @WithRegistrationStatusBuilder
    itinerantBuyer12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }
    @WithName("Computer and other E-Waste")
    @WithRegistrationStatusBuilder
    itinerantBuyer13([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }

    @WithName("Any other: Please specify")
    @WithRegistrationStatusBuilder
    itinerantBuyer14([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
        .containsAnswerConceptName("Itinerant buyer");
    }




 
}

module.exports = {RegistrationViewHandlerHasiruDala};

