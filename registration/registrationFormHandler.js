import {
    RuleFactory,
    FormElementsStatusHelper,
    FormElementStatusBuilder,
    StatusBuilderAnnotationFactory,
    FormElementStatus,
    VisitScheduleBuilder,
    ProgramRule,
    RuleCondition
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

}

module.exports = {RegistrationViewHandlerHasiruDala};

