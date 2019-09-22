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
    religionPleaseSpecify([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Religion").containsAnswerConceptName("Other");
    }

    @WithRegistrationStatusBuilder
    casteCommunityPleaseSpecify([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Caste/Community").containsAnswerConceptName("Other");
    }

    @WithName("Level of Education - Please Specify")
    @WithRegistrationStatusBuilder
    EducationPleaseSpecify([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Level of Education")
            .containsAnyAnswerConceptName("Skill/Vocational Training", "Other");
    }

    @WithRegistrationStatusBuilder
    pleaseSelectTheClassCourse([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you studying presently?").is.yes;
    }

    @WithRegistrationStatusBuilder
    doYouGetAnyGovernmentSponsoredScholarship([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you studying presently?").is.yes
        and.when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
    }


    @WithRegistrationStatusBuilder
    pleaseSelectTheReasonSForDiscontinuation([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you studying presently?").is.no;
    }

    @WithRegistrationStatusBuilder
    pleaseElaborate([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please select the class/course").containsAnswerConceptName("Other: Skill/Vocational Training");
    }

    @WithRegistrationStatusBuilder
    pleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please select the reason(s) for discontinuation").containsAnswerConceptName("Others");
    }

    @WithName("Please choose your employment type")
    @WithRegistrationStatusBuilder
    EM1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Line 1 (House No, Street No/ Name)")
    @WithRegistrationStatusBuilder
    WA1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Line 2 (Post Office)")
    @WithRegistrationStatusBuilder
    WA2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Landmark 1")
    @WithRegistrationStatusBuilder
    WA3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Landmark 2")
    @WithRegistrationStatusBuilder
    WA4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Area")
    @WithRegistrationStatusBuilder
    WA5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Pincode")
    @WithRegistrationStatusBuilder
    WA6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Contact Number 1")
    @WithRegistrationStatusBuilder
    WA7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Work Address Contact Number 2")
    @WithRegistrationStatusBuilder
    WA8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Is your present address same as your work address?")
    @WithRegistrationStatusBuilder
    PRA0([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Address Line 1 (House No, Street No/ Name)")
    @WithRegistrationStatusBuilder
    PRA1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Address Line 2 (Post Office)")
    @WithRegistrationStatusBuilder
    PRA2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Landmark 1")
    @WithRegistrationStatusBuilder
    PRA3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Landmark 2")
    @WithRegistrationStatusBuilder
    PRA4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Area")
    @WithRegistrationStatusBuilder
    PRA5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Pincode")
    @WithRegistrationStatusBuilder
    PRA6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Contact Number 1")
    @WithRegistrationStatusBuilder
    PRA7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Contact Number 2")
    @WithRegistrationStatusBuilder
    PRA8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether present address same as work address")
            .containsAnswerConceptName("No");
    }

    @WithName("Is your permanent address same as your present address?")
    @WithRegistrationStatusBuilder
    PMA0([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Permanent Address Line 1 (House No, Street No/ Name)")
    @WithRegistrationStatusBuilder
    PMA1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Line 2 (Post Office)")
    @WithRegistrationStatusBuilder
    PMA2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Landmark 1")
    @WithRegistrationStatusBuilder
    PMA3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Landmark 2")
    @WithRegistrationStatusBuilder
    PMA4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Area")
    @WithRegistrationStatusBuilder
    PMA5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Pincode")
    @WithRegistrationStatusBuilder
    PMA6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address State")
    @WithRegistrationStatusBuilder
    PMA7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address City")
    @WithRegistrationStatusBuilder
    PMA8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Contact Name 1")
    @WithRegistrationStatusBuilder
    PMA9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Contact Number 1")
    @WithRegistrationStatusBuilder
    PMA10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Contact Name 2")
    @WithRegistrationStatusBuilder
    PMA11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

    @WithName("Permanent Address Contact Number 2")
    @WithRegistrationStatusBuilder
    PMA12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Whether permanent address same as present address")
            .containsAnswerConceptName("No");
    }

  @WithName("How long have you been a informal waste/sanitation worker?")
  @WithRegistrationStatusBuilder
  IW1([], statusBuilder) {
    statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
      .containsAnswerConceptName("Informal Worker");
  }

  @WithName("What work were you doing before this?")
  @WithRegistrationStatusBuilder
  IW11([], statusBuilder) {
     statusBuilder.show().when.valueInRegistration("How long have you been a informal waste/sanitation worker?")
         .containsAnyAnswerConceptName("0-2 years", "2-5 years", "5-10 years");
  }

  @WithName("What work were you doing before this?")
  @WithRegistrationStatusBuilder
  IW12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("How long have you been a informal waste/sanitation worker?")
            .containsAnyAnswerConceptName("0-2 years", "2-5 years", "5-10 years");
  }

  @WithName("Were any of your parents doing the same work?")
  @WithRegistrationStatusBuilder
  IW2([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("Why did you choose this occupation?")
  @WithRegistrationStatusBuilder
  IW3([], statusBuilder) {
      statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
         .containsAnswerConceptName("Informal Worker");
  }

  @WithRegistrationStatusBuilder
  occupationPleaseElaborate([], statusBuilder) {
      statusBuilder.show().when.valueInRegistration("Why did you choose this occupation?")
          .containsAnswerConceptName("Others");
  }

  @WithName("Occupation - Please Elaborate")
  @WithRegistrationStatusBuilder
  IW4([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Why did you choose this occupation?")
            .containsAnswerConceptName("Others");
  }

  @WithName("Do you have an Occupational Identity Card?")
  @WithRegistrationStatusBuilder
  OIC1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithRegistrationStatusBuilder
  pleaseSelectTheBodyThatIssuedTheOccupationalIdentityCard([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have an Occupational Identity Card?").is.yes;
  }

  @WithName("Please select the body that issued the Occupational Identity Card")
  @WithRegistrationStatusBuilder
  OIC2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Do you have an Occupational Identity Card?").is.yes;
  }

  @WithName("Please Specifying")
  @WithRegistrationStatusBuilder
  OIC112([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please select the body that issued the Occupational Identity Card")
            .containsAnyAnswerConceptName("NGO/SHG/CBO authorized to issue the card", "Others");
  }

  @WithName("Whether you have Voter Registration Card")
  @WithRegistrationStatusBuilder
  ID1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithName("Whether you have Ration/BPL Card with your name included")
  @WithRegistrationStatusBuilder
  ID2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithName("Whether you have Aadhar Card")
  @WithRegistrationStatusBuilder
  ID3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithRegistrationStatusBuilder
  whetherYouHaveAadharEnrolmentId([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Whether you have Aadhar Card").is.no;
  }

  @WithName("Whether you have Aadhar Enrolment ID")
  @WithRegistrationStatusBuilder
  ID4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
          .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
          .and.when.valueInRegistration("Whether you have Aadhar Card").is.no;
  }

  @WithName("Whether you have Labour Card")
  @WithRegistrationStatusBuilder
  ID5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithName("Whether you have Health Card")
  @WithRegistrationStatusBuilder
  ID6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithName("Whether you have PAN Card")
  @WithRegistrationStatusBuilder
  ID7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithName("Whether you have any Other Cards")
  @WithRegistrationStatusBuilder
  ID8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithRegistrationStatusBuilder
  nameOfTheId([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Whether you have any Other Cards").is.yes;
  }

  @WithName("Name of the ID")
  @WithRegistrationStatusBuilder
  ID9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
          .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
          .and.when.valueInRegistration("Whether you have any Other Cards").is.yes;
  }

  @WithRegistrationStatusBuilder
  description([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Whether you have any Other Cards").is.yes;
  }

  @WithName("Description")
  @WithRegistrationStatusBuilder
  ID10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
          .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
          .and.when.valueInRegistration("Whether you have any Other Cards").is.yes;
  }

  @WithName("What is the type of ownership of your house?")
  @WithRegistrationStatusBuilder
  H1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithRegistrationStatusBuilder
  housePleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What is the type of ownership of your house?")
        .containsAnswerConceptName("Any Other");
  }

  @WithName("House - Please Explain")
  @WithRegistrationStatusBuilder
  H2([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("What is the type of ownership of your house?")
            .containsAnswerConceptName("Any Other");
  }

  @WithName("What is the type of ownership of land on which your house is built?")
  @WithRegistrationStatusBuilder
  H3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithRegistrationStatusBuilder
  ownershipOfLandPleaseElaborate([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What is the type of ownership of land on which your house is built?")
            .containsAnswerConceptName("Others");
  }

  @WithName("ownership of land - Please Elaborate")
  @WithRegistrationStatusBuilder
  H4([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("What is the type of ownership of land on which your house is built?")
            .containsAnswerConceptName("Others");
  }

  @WithName("What is the type of roofing of your house?")
  @WithRegistrationStatusBuilder
  H5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithRegistrationStatusBuilder
  roofingPleaseElaborate([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What is the type of roofing of your house?")
        .containsAnswerConceptName("Others");
  }

  @WithName("roofing - Please Elaborate")
  @WithRegistrationStatusBuilder
  H6([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("What is the type of roofing of your house?")
            .containsAnswerConceptName("Others");
  }

  @WithName("What type of toilet system do you use?")
  @WithRegistrationStatusBuilder
  H7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("Do you have an electricity connection for your house?")
  @WithRegistrationStatusBuilder
  H8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("What is the source of drinking water for your house?")
  @WithRegistrationStatusBuilder
  H9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("What is the source of cooking fuel at your house?")
  @WithRegistrationStatusBuilder
  H10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("Do you have any of the following at your house?")
  @WithRegistrationStatusBuilder
  H11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("Do you have any partial/total disablement that affects your day-to-day functioning")
  @WithRegistrationStatusBuilder
  D1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)")
  }

  @WithRegistrationStatusBuilder
  pleaseProvideDetails([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have any partial/total disablement that affects your day-to-day functioning").is.yes;
  }

  @WithName("Please provide details")
  @WithRegistrationStatusBuilder
  D2([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
         .containsAnswerConceptName("Informal Worker")
         .and.when.valueInRegistration("Do you have any partial/total disablement that affects your day-to-day functioning").is.yes;

  }

  @WithRegistrationStatusBuilder
  doYouHaveADoctorsCertificateIndicatingThePercentageOfDisability([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have any partial/total disablement that affects your day-to-day functioning").is.yes;
  }

  @WithName("Do you have a doctor's certificate indicating the percentage of disability?")
  @WithRegistrationStatusBuilder
  D3([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
         .containsAnswerConceptName("Informal Worker")
         .and.when.valueInRegistration("Do you have any partial/total disablement that affects your day-to-day functioning").is.yes;

  }
  @WithRegistrationStatusBuilder
  doYouReceiveADisabilityPension([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have any partial/total disablement that affects your day-to-day functioning").is.yes;
  }

  @WithName("Do you experience any of these?")
  @WithRegistrationStatusBuilder
  D4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
  }

  @WithName("experience - Please Elaborate")
  @WithRegistrationStatusBuilder
  D21([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you experience any of these?")
            .containsAnswerConceptName("Others");
  }

  @WithName("experience - Please Elaborate")
  @WithRegistrationStatusBuilder
  D5([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Do you experience any of these?")
            .containsAnswerConceptName("Others");
  }

  @WithName("Nature of Employment")
  @WithRegistrationStatusBuilder
  P1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("Working Area")
  @WithRegistrationStatusBuilder
  P2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithRegistrationStatusBuilder
  pleaseNameThem([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Working Area")
            .containsAnyAnswerConceptName("Zone(s)", "Ward(s)", "Area(s)", "Outside City", "Inside and Outside City/Town");
  }

  @WithRegistrationStatusBuilder
  namePleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Working Area").containsAnswerConceptName("Others");
  }

  @WithName("Frequency of work (How often do you get work?)")
  @WithRegistrationStatusBuilder
  P3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithRegistrationStatusBuilder
  frequencyOfWorkPleaseElaborate([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Frequency of work (How often do you get work?)")
        .containsAnswerConceptName("Others");
  }

  @WithName("No. of hours of work in a day")
  @WithRegistrationStatusBuilder
  P4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("Basis of Income")
  @WithRegistrationStatusBuilder
  P5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
  }

  @WithName("Fixed Rate (INR)")
  @WithRegistrationStatusBuilder
  P51([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnyAnswerConceptName("Hourly Fixed Rate (Enter Rate per Hour in INR)",
                "Daily Fixed Rate (Enter Rate per Day in INR)",
                "Weekly Fixed Rate (Enter Rate per Week in INR)",
                "Monthly Fixed Rate (Enter Rate per Month in INR)");
  }

    @WithName("No. of Pieces/Trips per Day")
    @WithRegistrationStatusBuilder
    P52([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Piece/Trip Rate")
    }

    @WithName("No of Working Days in a Month")
    @WithRegistrationStatusBuilder
    P53([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Piece/Trip Rate")
    }

    @WithName("Average Rate per Piece/Trip (INR)")
    @WithRegistrationStatusBuilder
    P54([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Piece/Trip Rate")
    }

    @WithName("Average Income per week (INR)")
    @WithRegistrationStatusBuilder
    P55([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Quantity of Waste Collected")
    }

    @WithName("No. of Simple Work done in a month")
    @WithRegistrationStatusBuilder
    P561([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Work Difficulty")
    }

    @WithName("Average Rate for Simple Work (INR)")
    @WithRegistrationStatusBuilder
    P562([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Work Difficulty")
    }

    @WithName("No. of Average Work done in a month")
    @WithRegistrationStatusBuilder
    P571([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Work Difficulty")
    }

    @WithName("Average Rate for Average Work (INR)")
    @WithRegistrationStatusBuilder
    P572([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Work Difficulty")
    }

    @WithName("No. of Complex Work done in a month")
    @WithRegistrationStatusBuilder
    P581([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Work Difficulty")
    }

    @WithName("Average Rate for Complex Work (INR)")
    @WithRegistrationStatusBuilder
    P582([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Work Difficulty")
    }

    @WithName("Complex - Please Elaborate")
    @WithRegistrationStatusBuilder
    P6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("Others")
    }

    @WithName("Mode of Payment")
    @WithRegistrationStatusBuilder
    P9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnswerConceptName("No Response")
    }

    @WithName("Payment - Please Elaborate")
    @WithRegistrationStatusBuilder
    P91([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Mode of Payment")
            .containsAnswerConceptName("Others")
    }

    @WithName("Average Income Earned per Month (INR)")
    @WithRegistrationStatusBuilder
    P7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Basis of Income")
            .containsAnyAnswerConceptName("Hourly Fixed Rate (Enter Rate per Hour in INR)", "Daily Fixed Rate (Enter Rate per Day in INR)", "Weekly Fixed Rate (Enter Rate per Week in INR)", "Monthly Fixed Rate (Enter Rate per Month in INR)", "Piece/Trip Rate", "Quantity of Waste Collected", "Work Difficulty");
    }

    @WithName("Do you have other sources of income?")
    @WithRegistrationStatusBuilder
    P8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Basis of Income").containsAnswerConceptNameOtherThan("No Response");
    }

    @WithRegistrationStatusBuilder
    source([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have other sources of income?").is.yes;
    }

    @WithRegistrationStatusBuilder
    averageIncomeEarnedPerMonthFromOtherSourcesInr([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have other sources of income?").is.yes;
    }

    @WithName("Who hands over the cash/cheque or makes the money transfer?")
    @WithRegistrationStatusBuilder
    P10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Please specify the Dept./Agency (Ex. Railways etc.)")
    @WithRegistrationStatusBuilder
    P101([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Who hands over the cash/cheque or makes the money transfer?")
            .containsAnswerConceptName("State/Central Government Department/Agency");
    }

    @WithName("Please specify NGO/SHG (Ex. Wave Federation etc.)")
    @WithRegistrationStatusBuilder
    P102([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Who hands over the cash/cheque or makes the money transfer?")
            .containsAnswerConceptName("Self Help Group");
    }

    @WithName("money transfer - Please Elaborate")
    @WithRegistrationStatusBuilder
    P103([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Who hands over the cash/cheque or makes the money transfer?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Do/Have you experience(d) any of these symptoms/disorders?")
    @WithRegistrationStatusBuilder
    HS1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("symptoms/disorders - Please Elaborate")
    @WithRegistrationStatusBuilder
    HS11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do/Have you experience(d) any of these symptoms/disorders?")
            .containsAnswerConceptName("Other Symptoms");
    }

    @WithName("Some of the workers we have spoken to have stated that they consume alcohol/narcotic drugs. Do you also consume them?")
    @WithRegistrationStatusBuilder
    HS2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    whenDoYouConsumeAlcoholNarcoticDrugs([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Some of the workers we have spoken to have stated that they consume alcohol/narcotic drugs. Do you also consume them?").is.yes;
    }

    @WithName("If you or someone is sick at home where do you go for medical help?")
    @WithRegistrationStatusBuilder
    HS3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("medical help - Please Elaborate?")
    @WithRegistrationStatusBuilder
    HS31([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("If you or someone is sick at home where do you go for medical help?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Please specify the distance to the nearest Government/Private/Primary Health Centre from your house")
    @WithRegistrationStatusBuilder
    HS4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Have you ever participated in a health camp?")
    @WithRegistrationStatusBuilder
    HS51([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Will you participate in a  medical camp, if conducted in the future?")
    @WithRegistrationStatusBuilder
    HS52([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Do you have a facility (Like a Bathroom/Changing Room) to refresh after work?")
    @WithRegistrationStatusBuilder
    HS61([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Do you have separate toilets for men and women?")
    @WithRegistrationStatusBuilder
    HS62([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("How often do you use Gloves for emptying and collecting")
    @WithRegistrationStatusBuilder
    OS1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("How often do you use Mask for emptying and collecting")
    @WithRegistrationStatusBuilder
    OS2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("How often do you use Uniform for emptying and collecting")
    @WithRegistrationStatusBuilder
    OS3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("How often do you use Aprons/Old Shirt for emptying and collecting")
    @WithRegistrationStatusBuilder
    OS4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }


    @WithName("How often do you use Gum Boots for emptying and collecting")
    @WithRegistrationStatusBuilder
    OS5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("How often do you use Chappals for emptying and collecting")
    @WithRegistrationStatusBuilder
    OS6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Do you use any other personal protection equipment (PPE) during collection/ Emptying?")
    @WithRegistrationStatusBuilder
    OS8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Please Explain (Type of PPE)")
    @WithRegistrationStatusBuilder
    pleaseExplainTypeOfPpeAndFrequencyOfUse([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you use any other personal protection equipment (PPE) during collection/ Emptying?").is.yes;
    }

    @WithName("How often do you use Others for emptying and collecting")
    @WithRegistrationStatusBuilder
    OS7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker")
            .and.when.valueInRegistration("Do you use any other personal protection equipment (PPE) during collection/ Emptying?")
            .containsAnswerConceptName("Yes");
    }

    @WithName("Are you part of a Trade Union?")
    @WithRegistrationStatusBuilder
    FL11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    nameOfTheOrganizationS([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of a Trade Union?").is.yes;
    }


    @WithRegistrationStatusBuilder
    haveYouReceivedAnyAssistanceFromTradeUnion([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of a Trade Union?").is.yes;
    }

    @WithRegistrationStatusBuilder
    tradeUnionPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from Trade Union?").is.yes;
    }

    @WithName("Are you part of a Political Party?")
    @WithRegistrationStatusBuilder
    FL21([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    nameOfTheParty([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of a Political Party?").is.yes;
    }

    @WithRegistrationStatusBuilder
    haveYouReceivedAnyAssistanceFromPoliticalParty([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of a Political Party?").is.yes;
    }

    @WithRegistrationStatusBuilder
    politicalPartyPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from Political Party?").is.yes;
    }

    @WithName("Are you part of any SHG?")
    @WithRegistrationStatusBuilder
    FL31([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    nameAndLocationOfShg([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any SHG?").is.yes;
    }

    @WithRegistrationStatusBuilder
    haveYouReceivedAnyAssistanceFromShg([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any SHG?").is.yes;
    }

    @WithRegistrationStatusBuilder
    shgPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from SHG?").is.yes;
    }

    @WithName("Are you part of any youth association?")
    @WithRegistrationStatusBuilder
    FL41([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Name of the youth association")
    @WithRegistrationStatusBuilder
    nameOfTheAssociation1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any youth association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    haveYouReceivedAnyAssistanceFromYouthAssociation([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any youth association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    youthAssociationPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from Youth Association?").is.yes;
    }

    @WithName("Are you part of any caste association?")
    @WithRegistrationStatusBuilder
    FL51([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Name of the caste association")
    @WithRegistrationStatusBuilder
    nameOfTheAssociation2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any caste association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    haveYouReceivedAnyAssistanceFromCasteAssociation([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any caste association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    casteAssociationPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from Caste Association?").is.yes;
    }

    @WithName("Are you part of any fan club/association?")
    @WithRegistrationStatusBuilder
    FL61([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    nameOfTheClubAssociation([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any fan club/association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    haveYouReceivedAnyAssistanceFromClubAssociation([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any fan club/association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    clubAssociationPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from Club/Association?").is.yes;
    }

    @WithName("Are you part of any other association?")
    @WithRegistrationStatusBuilder
    FL71([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    nameOfTheOtherAssociation([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any other association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    haveYouReceivedAnyAssistanceFromOtherAssociation([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you part of any other association?").is.yes;
    }

    @WithRegistrationStatusBuilder
    otherAssociationPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from Other Association?").is.yes;
    }

    @WithName("Have you received any assistance from any government body? (Ex. TAHDCO, Slum Board etc.)")
    @WithRegistrationStatusBuilder
    FL81([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    nameOfTheBody([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from any government body? (Ex. TAHDCO, Slum Board etc.)").is.yes;
    }

    @WithRegistrationStatusBuilder
    nameOfTheScheme([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from any government body? (Ex. TAHDCO, Slum Board etc.)").is.yes;
    }

    @WithRegistrationStatusBuilder
    natureOfAssistance([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received any assistance from any government body? (Ex. TAHDCO, Slum Board etc.)").is.yes;
    }

    @WithName("Have you received a loan from NSKFDC?")
    @WithRegistrationStatusBuilder
    FL91([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithRegistrationStatusBuilder
    nskfdcPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you received a loan from NSKFDC?").is.yes;
    }

    @WithName("Are you registered with Employees’ State Insurance (ESI)?")
    @WithRegistrationStatusBuilder
    FL92([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Are you registered with Employee Provident Fund Organization (EPFO)?")
    @WithRegistrationStatusBuilder
    FL93([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Have you been able to access details about PF / ESI?")
    @WithRegistrationStatusBuilder
    FL94([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Who do you approach when you need loan?")
    @WithRegistrationStatusBuilder
    FL95([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Loan - Please explain")
    @WithRegistrationStatusBuilder
    FL96([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Who do you approach when you need loan?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Are you currently in debt?")
    @WithRegistrationStatusBuilder
    FL97([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnswerConceptName("Informal Worker");
    }

    @WithName("Do you have a bank account?")
    @WithRegistrationStatusBuilder
    SSB1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
    }

    @WithName("Do you have a post office SB account?")
    @WithRegistrationStatusBuilder
    SSP1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
    }

    @WithName("Do you get old age pension (OAP)?")
    @WithRegistrationStatusBuilder
    SS1([], statusBuilder) {
       statusBuilder.show().when.ageInYears.is.greaterThanOrEqualTo(64)
           .and.valueInRegistration("Please choose the type of respondent")
           .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
   }

    @WithName("Have you or any one in your house enrolled in a government sponsored health insurance scheme?")
    @WithRegistrationStatusBuilder
    SS2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
    }

    @WithName("Do you receive a widow pension?")
    @WithRegistrationStatusBuilder
    SS4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Marital status").containsAnswerConceptName("Widowed")
            .and.when.valueInRegistration("gender").is.female
            .and.when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
    }

    @WithName("Do you receive a single woman pension?")
    @WithRegistrationStatusBuilder
    SS5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Marital status").containsAnswerConceptName("Single")
            .and.when.valueInRegistration("gender").is.female
            .and.when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
    }

    @WithName("What is your profession?")
    @WithRegistrationStatusBuilder
    relative1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Relative Living with Informal Worker (Dependent)", "Relative Living with Informal Worker (Not Dependent)");
    }

    @WithRegistrationStatusBuilder
    professionPleaseExplain([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What is your profession?")
            .containsAnswerConceptName("Others");
    }

   @WithName("profession - Please Explain")
   @WithRegistrationStatusBuilder
   relative2([], statusBuilder) {
       statusBuilder.show().when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Relative Living with Informal Worker (Dependent)", "Relative Living with Informal Worker (Not Dependent)")
            .and.when.valueInRegistration("What is your profession?")
            .containsAnswerConceptName("Others");
   }

    @WithName("Type of Informal Waste Worker")
    @WithRegistrationStatusBuilder
    pro1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
            .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Type of Informal Sanitation Worker")
    @WithRegistrationStatusBuilder
    pro2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
            .containsAnswerConceptName("Informal Sanitation worker");
    }

    @WithName("Do you have any additional jobs?")
    @WithRegistrationStatusBuilder
    pro3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
            .containsAnyAnswerConceptName("Informal waste worker", "Informal Sanitation worker");
    }

    @WithName("additional jobs - Please Explain")
    @WithRegistrationStatusBuilder
    pro4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you have any additional jobs?")
            .containsAnswerConceptName("Any Other");
    }

    @WithName("Have you undergone any of the following trainings?")
    @WithRegistrationStatusBuilder
    t1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Please choose your employment type")
            .containsAnswerConceptName("Informal waste worker");
    }

    @WithName("Trainings - Please Explain")
    @WithRegistrationStatusBuilder
    t11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you undergone any of the following trainings?")
            .containsAnswerConceptName("Others");
    }

    @WithName("How often do you collect scrap/go waste picking?")
    @WithRegistrationStatusBuilder
    ibSd1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Itinerant buyer", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("How do you pick waste?")
    @WithRegistrationStatusBuilder
    ibSd2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("What are your sources of waste?")
    @WithRegistrationStatusBuilder
    ibSd3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you pick waste?")
            .containsAnyAnswerConceptName("Free roaming and migrant from other states (living in the city for less than 5 years)", "Free roaming living in city for more than 5 years");
    }

    @WithName("How much quantity in kg do you collect on average per week?")
    @WithRegistrationStatusBuilder
    ibSd4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("How much quantity in kg do you collect on average per week?")
    @WithRegistrationStatusBuilder
    ibSd5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you pick waste?")
            .containsAnyAnswerConceptName("Free roaming and migrant from other states (living in the city for less than 5 years)", "Free roaming living in city for more than 5 years");
    }

    @WithName("What are the kinds of waste you pick/sort?")
    @WithRegistrationStatusBuilder
    ibSd6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Please specify 1")
    @WithRegistrationStatusBuilder
    ibSd7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What are the kinds of waste you pick/sort?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Details of the buyer to whom you sell your waste")
    @WithRegistrationStatusBuilder
    ibSd8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Details of the buyer to whom you sell your waste")
    @WithRegistrationStatusBuilder
    ibSd9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you pick waste?")
            .containsAnyAnswerConceptName("Free roaming and migrant from other states (living in the city for less than 5 years)", "Free roaming living in city for more than 5 years");
    }

    @WithName("children during off school hours - Please specify")
    @WithRegistrationStatusBuilder
    ibSd10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Details of the buyer to whom you sell your waste")
            .containsAnyAnswerConceptName("Others");
    }

    @WithName("Name of scrap dealer/buyer")
    @WithRegistrationStatusBuilder
    ibSd11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Itinerant buyer", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Address of scrap dealer/buyer")
    @WithRegistrationStatusBuilder
    ibSd12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Itinerant buyer", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Phone number of scrap dealer/buyer")
    @WithRegistrationStatusBuilder
    ibSd13([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Itinerant buyer", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Do you have an advance with scrap dealer/buyer?")
    @WithRegistrationStatusBuilder
    ibSd14([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Do you face police harassment?")
    @WithRegistrationStatusBuilder
    ibSd15([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Do you involve you children during off school hours?")
    @WithRegistrationStatusBuilder
    ibSd16([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("Please specify 2")
    @WithRegistrationStatusBuilder
    ibSd17([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Details of the buyer to whom you sell your waste")
            .containsAnswerConceptName("Others");
    }

    @WithName("How much do you earn?")
    @WithRegistrationStatusBuilder
    ibSd18([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Itinerant buyer", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("How do you transport your collected waste?")
    @WithRegistrationStatusBuilder
    ibSd19([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Itinerant buyer", "Sorters at scrap shops", "Sorters at DWCC");
    }

    @WithName("What distance do you walk per day")
    @WithRegistrationStatusBuilder
    ibSd20([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you transport your collected waste?")
            .containsAnyAnswerConceptName("On shoulder / head");
    }

    @WithName("what is your daily expenditure on transport?")
    @WithRegistrationStatusBuilder
    ibSd21([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you transport your collected waste?")
            .containsAnswerConceptName("Cycle");
    }

    @WithName("If motorised vehicle then what is your daily expenditure on transport?")
    @WithRegistrationStatusBuilder
    abc6a([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you transport your collected waste?")
            .containsAnswerConceptName("Motorised vehicle");
    }


    @WithName("Do you have adequate work / Do you make adequate income?")
    @WithRegistrationStatusBuilder
    ibSd22([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Wastepicker", "Sorters at scrap shops", "Sorters at DWCC");
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
    scrapDealer1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Size of the shop: in sq ft")
    @WithRegistrationStatusBuilder
    scrapDealer2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Maximum Storage Capacity")
    @WithRegistrationStatusBuilder
    scrapDealer3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("How many sorters do you employ?")
    @WithRegistrationStatusBuilder
    scrapDealer4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("What are your main constraints or challenges?")
    @WithRegistrationStatusBuilder
    scrapDealer5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Where do you get help for capital?")
    @WithRegistrationStatusBuilder
    scrapDealer6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("What is the kind of support you feel if provided to you, would help to improve your business?")
    @WithRegistrationStatusBuilder
    scrapDealer7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Do you need any license to operate?")
    @WithRegistrationStatusBuilder
    scrapDealer8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Do you have any license")
    @WithRegistrationStatusBuilder
    scrapDealer9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Glass Quarter Bottles waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Glass Beer bottles waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Glass waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Ferrous Metals/Iron waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer13([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Copper waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer14([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Aluminum waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer15([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Other Metals waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer16([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Batteries waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer17([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Brass waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer18([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Metal Mercury waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer19([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper Cardboard/Corrugated boxes waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer20([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper White Paper/White Record waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer21([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper Road scrap paper waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer22([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Paper Tetrapak waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer23([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Tetrapak Details")
    @WithRegistrationStatusBuilder
    scrapDealer24([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics PET (Pearlpet) waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer25([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Hard Plastic items (cassette covers) waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer26([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Soft Plastic items (Buckets) waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer27([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Soft Plastic, Chappal, soles waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer28([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Milk Bags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer29([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics LD Plastic bags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer30([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics Thin Plastic bags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer31([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Plastics White Plastic waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer32([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("White Plastic Details")
    @WithRegistrationStatusBuilder
    scrapDealer33([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Rubber waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer34([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Textiles/Rags waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer35([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Tin waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer36([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Others Thermocol/Styrofoam waste sold per week in Kg")
    @WithRegistrationStatusBuilder
    scrapDealer37([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("Thermocol/Styrofoam Details")
    @WithRegistrationStatusBuilder
    scrapDealer38([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Scrap Dealer");
    }

    @WithName("How long do you walk to drop collected waste to designated spot/collection point?")
    @WithRegistrationStatusBuilder
    dtdc1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithName("How do you carry your waste after collection from households/establishments?")
    @WithRegistrationStatusBuilder
    dtdc2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithName("collection from households/establishments - Please Explain")
    @WithRegistrationStatusBuilder
    dtdc3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you carry your waste after collection from households/establishments?")
            .containsAnyAnswerConceptName("Others");
    }

    @WithName("How long do you carry the collected waste if no vehicle is available?")
    @WithRegistrationStatusBuilder
    dtdc4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithName("Do you get segregated waste?")
    @WithRegistrationStatusBuilder
    dtdc5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithName("How much of waste do you collect per day?")
    @WithRegistrationStatusBuilder
    dtdc6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithName("How many hours do you work in a day?")
    @WithRegistrationStatusBuilder
    dtdc7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Street Sweeper / Drain Cleaner", "Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithName("When is your weekly off?")
    @WithRegistrationStatusBuilder
    dtdc75([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Street Sweeper / Drain Cleaner", "Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithName("Do you also work at ULB site/plant/landfill?")
    @WithRegistrationStatusBuilder
    dtdc8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Waste collectors on ULB Autorickshaws/trucks", "Solid Waste Door to Door Collector", "Solid Waste Micro Compost Worker");
    }

    @WithRegistrationStatusBuilder
    whereDoYouWorkExDwccMrfCompostingPlantLandfillEtc([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you also work at ULB site/plant/landfill?").is.yes;
    }

    @WithRegistrationStatusBuilder
    whatWorkDoYouDoAtThere([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you also work at ULB site/plant/landfill?").is.yes;
    }

    @WithName("Work - Please Explain")
    @WithRegistrationStatusBuilder
    dtdc9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What work do you do at there?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Do you receive any income apart from wages?")
    @WithRegistrationStatusBuilder
    dtdc11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnyAnswerConceptName("Waste collectors on ULB Autorickshaws/trucks",
                "Solid Waste Door to Door Collector",
                "Solid Waste Micro Compost Worker",
                "Street Sweeper / Drain Cleaner",)
            .or.when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Decanting Station/Sewage Treatment Plant (STP) Worker");
    }

    @WithRegistrationStatusBuilder
    sourceOfAdditionalIncome([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you receive any income apart from wages?").is.yes;
    }

    @WithRegistrationStatusBuilder
    incomePerMonthInr([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you receive any income apart from wages?").is.yes;
    }

    @WithName("Do you clean the storm water drains and other open drainages?")
    @WithRegistrationStatusBuilder
    swm1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Street Sweeper / Drain Cleaner");
    }

    @WithName("What is the distance do you sweep per day?")
    @WithRegistrationStatusBuilder
    swm2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Street Sweeper / Drain Cleaner");
    }

    @WithName("Do you carry the waste after sweeping?")
    @WithRegistrationStatusBuilder
    swm3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Street Sweeper / Drain Cleaner");
    }

    @WithRegistrationStatusBuilder
    howLongDoYouCarryTheWasteAfterSweeping([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you carry the waste after sweeping?").is.yes;
    }

    @WithName("How do you carry your waste after sweeping?")
    @WithRegistrationStatusBuilder
    swm4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Street Sweeper / Drain Cleaner");
    }

    @WithName("Sweeping - Please Specify")
    @WithRegistrationStatusBuilder
    sweepingPleaseSpecify([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you carry your waste after sweeping?")
            .containsAnswerConceptName("Others");
    }

    @WithName("What kind of brooms do you use?")
    @WithRegistrationStatusBuilder
    swm5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Street Sweeper / Drain Cleaner");
    }

    @WithName("Brooms - Please specify")
    @WithRegistrationStatusBuilder
    swm6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What kind of brooms do you use?")
            .containsAnswerConceptName("Others");
    }

    @WithName("How often do you get new broom?")
    @WithRegistrationStatusBuilder
    swm7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Waste Worker")
            .containsAnswerConceptName("Street Sweeper / Drain Cleaner");
    }

    @WithName("New Brooms - Please specify")
    @WithRegistrationStatusBuilder
    swm8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How often do you get new broom?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Ownership of the truck")
    @WithRegistrationStatusBuilder
    dw1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("truck - Please Explain")
    @WithRegistrationStatusBuilder
    dw2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Ownership of the truck")
            .containsAnswerConceptName("Others");
    }

    @WithName("Nature of work")
    @WithRegistrationStatusBuilder
    dw3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("Do you also remove blockages?")
    @WithRegistrationStatusBuilder
    dw4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker", "Household Sanitation Worker", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment", "Community/Public Toilet Cleaner", "Toilet Cleaner in Schools and Offices");
    }

    @WithRegistrationStatusBuilder
    whatAreTheCommonReasonsForBlockages([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you also remove blockages?").is.yes;
    }

    @WithName("What is the average group size of a typical desludging work?")
    @WithRegistrationStatusBuilder
    dw5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("On an average, how many houses/establishments do you desludge on a typical working day?")
    @WithRegistrationStatusBuilder
    dw6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("What type of customers do you serve?")
    @WithRegistrationStatusBuilder
    dw7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("customers - Please Explain")
    @WithRegistrationStatusBuilder
    dw8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What type of customers do you serve?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Do you leave the lid of the tank open for some time before cleaning?")
    @WithRegistrationStatusBuilder
    dw9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("Have you entered the tank for cleaning?")
    @WithRegistrationStatusBuilder
    dw10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithRegistrationStatusBuilder
    howOftenDoYouEnterTheTank([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you entered the tank for cleaning?").is.yes;
    }

    @WithRegistrationStatusBuilder
    whatAreTheReasonsForEnteringIntoTheTank([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you entered the tank for cleaning?").is.yes;
    }

    @WithName("tank - Please Explain")
    @WithRegistrationStatusBuilder
    dw11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What are the reasons for entering into the tank?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Do you use any tools at work?")
    @WithRegistrationStatusBuilder
    dw12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithRegistrationStatusBuilder
    whatTypeOfToolsDoYouUse([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you use any tools at work?").is.yes;
    }

    @WithName("Who provided these tools?")
    @WithRegistrationStatusBuilder
    dw13([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("tools - Please Explain")
    @WithRegistrationStatusBuilder
    dw14([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Who provided these tools?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Who taught you the process of desludging?")
    @WithRegistrationStatusBuilder
    dw15([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("Have you been formally trained?")
    @WithRegistrationStatusBuilder
    dw16([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithRegistrationStatusBuilder
    nameOfTheOrganisationThatProvidedTheTraining([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Have you been formally trained?").is.yes;
    }

    @WithName("When did you receive training?")
    @WithRegistrationStatusBuilder
    dw17([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("Do you carry First Aid kit with you at all times?")
    @WithRegistrationStatusBuilder
    dw18([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithName("Do you clean yourself after collection from septic tank?")
    @WithRegistrationStatusBuilder
    dw19([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithRegistrationStatusBuilder
    septicTankDoYouUseWaterToClean([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you clean yourself after collection from septic tank?").is.yes;
    }

    @WithRegistrationStatusBuilder
    septicTankDoYouUseSoapCleaningDetergentToClean([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you clean yourself after collection from septic tank?").is.yes;
    }

    @WithRegistrationStatusBuilder
    septicTankDoYouWipeOnCloth([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you clean yourself after collection from septic tank?").is.yes;
    }

    @WithName("Do you clean yourself after disposing the load?")
    @WithRegistrationStatusBuilder
    dw20([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Desludging Worker");
    }

    @WithRegistrationStatusBuilder
    doYouUseWaterToClean([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you clean yourself after disposing the load?").is.yes;
    }

    @WithRegistrationStatusBuilder
    doYouUseSoapCleaningDetergentToClean([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you clean yourself after disposing the load?").is.yes;
    }

    @WithRegistrationStatusBuilder
    doYouWipeOnCloth([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you clean yourself after disposing the load?").is.yes;
    }


    @WithName("Where do you carry out toilet cleaning activities?")
    @WithRegistrationStatusBuilder
    tc1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("No. of Establishments")
    @WithRegistrationStatusBuilder
    tc2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Where do you carry out toilet cleaning activities?")
            .containsAnyAnswerConceptName("House", "Commercial Establishment", "Office", "Community/ Public Toilet", "Railways", "Others");
    }

    @WithName("Do you get paid when the schools are on summer holiday?")
    @WithRegistrationStatusBuilder
    tc3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Where do you carry out toilet cleaning activities?")
            .containsAnswerConceptName("School/College");
    }

    @WithName("How many toilet seats do you clean per day?")
    @WithRegistrationStatusBuilder
    tc4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("Who decides frequency of cleaning?")
    @WithRegistrationStatusBuilder
    tc5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Decanting Station/Sewage Treatment Plant (STP) Worker", "Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("frequency of cleaning - Please Explain")
    @WithRegistrationStatusBuilder
    tc6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Who decides frequency of cleaning?")
            .containsAnswerConceptName("Others");
    }

    @WithName("What cleaning materials do you use?")
    @WithRegistrationStatusBuilder
    tc7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("cleaning materials - Please Explain")
    @WithRegistrationStatusBuilder
    tc8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What cleaning materials do you use?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Who pays for cleaning material?")
    @WithRegistrationStatusBuilder
    tc9([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("cleaning material - Please Explain")
    @WithRegistrationStatusBuilder
    tc10([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Who pays for cleaning material?")
            .containsAnswerConceptName("Contractors");
    }

    @WithName("Do you pick up the clogged / contaminated waste?")
    @WithRegistrationStatusBuilder
    tc11([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("How do you dispose the clogged / contaminated waste?")
    @WithRegistrationStatusBuilder
    tc12([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }


    @WithName("clogged/contaminated waste - Please Explain")
    @WithRegistrationStatusBuilder
    tc13([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you dispose the clogged / contaminated waste?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Is there any other work you do in the house / institution / establishment / office?")
    @WithRegistrationStatusBuilder
    tc14([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("house/institution/establishment/office - Please Explain")
    @WithRegistrationStatusBuilder
    tc15([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Is there any other work you do in the house / institution / establishment / office?")
            .containsAnswerConceptName("Others");
    }

    @WithName("How many of you go together for undertaking the work?")
    @WithRegistrationStatusBuilder
    tc16([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("Do you have access and facilities to clean yourself?")
    @WithRegistrationStatusBuilder
    tc17([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Decanting Station/Sewage Treatment Plant (STP) Worker", "Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }

    @WithName("What are tools/implants used at work?")
    @WithRegistrationStatusBuilder
    tc18([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment", "Decanting Station/Sewage Treatment Plant (STP) Worker");
    }

    @WithName("tools/implants - Please Explain")
    @WithRegistrationStatusBuilder
    tc19([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What are tools/implants used at work?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Who provided these implants?")
    @WithRegistrationStatusBuilder
    tc20([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Community/Public Toilet Cleaner", "Household Sanitation Worker", "Toilet Cleaner in Schools and Offices", "Toilet Cleaner at Railways", "Sanitation Worker at Lodge/Hotel/Hospital/Commercial Establishment");
    }


    @WithName("What work do you perform at decanting station / Sewage Treatment Plant?")
    @WithRegistrationStatusBuilder
    dwr1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnswerConceptName("Decanting Station/Sewage Treatment Plant (STP) Worker");
    }


    @WithName("decanting station/Sewage Treatment Plant - Please Explain")
    @WithRegistrationStatusBuilder
    dwr2([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("What work do you perform at decanting station / Sewage Treatment Plant?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Who provides these tools/implants?")
    @WithRegistrationStatusBuilder
    dwr3([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Decanting Station/Sewage Treatment Plant (STP) Worker");
    }

    @WithName("Do you use any cleaning materials?")
    @WithRegistrationStatusBuilder
    dwr4([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Decanting Station/Sewage Treatment Plant (STP) Worker");
    }

    @WithName("materials - Please Explain")
    @WithRegistrationStatusBuilder
    dwr5([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Do you use any cleaning materials?")
            .containsAnswerConceptName("Others");
    }

    @WithName("How do you dispose the collected waste?")
    @WithRegistrationStatusBuilder
    dwr6([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Type of Informal Sanitation Worker")
            .containsAnyAnswerConceptName("Decanting Station/Sewage Treatment Plant (STP) Worker");
    }

    @WithName("collected waste - Please Explain")
    @WithRegistrationStatusBuilder
    dwr7([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("How do you dispose the collected waste?")
            .containsAnswerConceptName("Others");
    }

    @WithName("Do you get any government sponsored scholarship?")
    @WithRegistrationStatusBuilder
    dwr8([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Are you studying presently?").is.yes
            .and.when.valueInRegistration("Please choose the type of respondent")
            .containsAnyAnswerConceptName("Informal Worker", "Relative Living with Informal Worker (Dependent)");
    }

}


module.exports = {RegistrationViewHandlerHasiruDala};

