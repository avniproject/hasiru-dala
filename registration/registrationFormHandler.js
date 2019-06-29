import {
    RuleFactory,
    FormElementsStatusHelper,
    FormElementStatusBuilder,
    StatusBuilderAnnotationFactory,
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

    @WithName("Gender")
    @WithRegistrationStatusBuilder
    a1([], statusBuilder) {
    statusBuilder.skipAnswers("Male","Female","Other Gender");
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
    statusBuilder.show().when.valueInRegistration("Do you have any physical disability?").is.yes;
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
    doYouHaveAnyAdditionalJobs([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker").containsAnswerConceptName("Scrap Dealer");
    }

    @WithRegistrationStatusBuilder
    pleaseProvideDetails([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker").containsAnswerConceptName("Scrap Dealer");
    }

    @WithRegistrationStatusBuilder
    nameOfTheOrganization([], statusBuilder) {
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

    //similary write same logic for all the remaining fields 18-27
 
}

module.exports = {RegistrationViewHandlerHasiruDala};

