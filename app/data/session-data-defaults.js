/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // PIP assessment - made up example for training and research purposes



  attendeenamepip:'Jane Doe',
  attendeerelationshippip:'Support worker',

  historyofcondition:'--------- \nPrimary condition \n--------- \nLearning disability – from birth \nShe is able to read and understand words and pictures but has difficult reading letters due to her learning disability. \nHas aids within flat including toilet aids and grab rails. Uses incontinence pads, requires prompting to change these and maintain personal hygiene. \n\n------\nSecondary condition\n-------\nAnxiety and depressive disorders - 30 years\nExperiences poor motivation, low mood, pain and discomfort right leg. She has a learning disability which affects understanding. \nStaff provide daily prompting due to poor motivation, low mood, self-neglect, unkempt, inappropriate dressing for the weather, self- injurious behaviours and anxiety. \n\n-------\nOther conditions\n------\nHypertension  - long-term\nAsthma – long-term\nOsteoarthritis – 15 years\nCan walk up to 200metres however experience pain and discomfort after this. She then becomes slower and stops. She is prescribed pain relief gel for night time use.',
  evidenceusedpip:'Care plan \nMedication list \nClaimant questionnaire',
  currentmedication:'CETRIZINE 10MG - One daily\nCITALOPRAM 40MG - One daily\nFLIXOTIDE EVOHALER 250MCG - two puffs daily\nIBUPROFEN GEL 10% 100G - apply 3-4 times daily\nLANSOPRAZOLE 15MG - one daily\nLORAZEPAM 1MG - one as needed\nOLANZAPINE 5MG - one at night\nPARACETAMOL 500MG - two tablets four times daily\nPHYLLOCONTIN CONTINUS 225MG - one twice daily\nZEROCREAM - apply as directed',
  socialoccupational:'Has been a resident in supported housing for 3 years.\n\nGoes to volunteer group at church and health centre - these are learnt routes and areas. People there know her and her conditions and will inform staff if she does not arrive and when she leaves. She lacks danger awareness and risk assessments are carried out before she undertakes these journeys.\n\nShe travels in a private taxi from the same taxi company and same driver as they know her well. She is able to call Guy for support if she becomes too tired or agitated.\n\nShe sometimes needs money for items on these outings and carers will give her the correct amount such as bus fare as she would have difficulty working it out herself.',
  evidenceused:'Questionnaire UC50',

  preparingfoodSelect:'Needs supervision or assistance to either prepare or cook a simple meal',
  preparingfoodReason:'CQ reports the need for supervision when preparing and cooking meals and checking expiry dates.\n\nCare plan reports although she is able to make snacks, she needs support to make hot meals. This is consistent with the mental health medications evidenced and the support worker comments which confirmed staff provide support.\n\nIt is therefore likely she needs supervision to prepare and cook a simple meal reliably.',
  
  takingnutritionSelect:'Can take nutrition unaided',
  takingnutritionReason:'The claimant did not report significant functional problems with this activity in their questionnaire and there is no evidence to suggest otherwise. ',

  managingtherapySelect:'Needs to use an aid or appliance to be able to manage medication, or needs supervision, prompting or assistance to be able to manage medication, or needs supervision, prompting or assistance to be able to monitor a health condition',
  managingtherapyReason:'CQ reports the use of a prefilled dosette box which is monitored by carers and prompting to use inhalers.\n\nCare Plan reports staff administer medications. Support Worker confirms staff prompt with daily activities, consistent with mental health medications evidenced on the medications list.\n\nIt is therefore likely she needs prompting to manage medication safely and to an acceptable standard.',

  washingbathingSelect:'Needs supervision or prompting to be able to wash or bathe',
  washingbathingReason:'CQ reports the need for prompting to wash and bathe.\n\nConsistent with support worker comments and care plan which report staff are required to prompt her to maintain hygiene. This is also supported by the mental health medication in the medications list.\n\nIt is therefore likely she needs prompting to be able to wash or bathe to an acceptable standard.',

  toiletneedsSelect:'Needs supervision or prompting to be able to manage toilet needs',
  toiletneedsReason:'CQ reports the use on incontinence pads and regular prompting to use the toilet to prevent incontinence.\n\nCare Plan and support worker confirm use of incontinence pads to reduce accidents and regular prompts to change these and maintain hygiene. No reported conditions which are likely to result in incontinence.\n\nIt is therefore likely she needs prompting to be able to manage toilet needs to an acceptable standard on the majority of days.',

  dressingSelect:'Needs either prompting to be able to dress, undress or determine appropriate circumstances for remaining clothed, or needs prompting or assistance to be able to select appropriate clothing',
  dressingReason:'CQ reports the need for prompting to select appropriate clothing and change dirty clothing.\n\nCare Plan confirms help to select clothing suitable and support worker reports staff prompt with daily activities, consistent with mental health medications evidenced.\n\nIt is therefore likely she would require prompting to dress and undress to an acceptable standard.',

  communicatingverballySelect:'Needs communication support to be able to express or understand complex verbal information',
  communicatingverballyReason:'CQ reports difficulty with complex verbal information and needing information simplified and the use of picture aids.\n\nConsistent with the reported primary condition. Care Plan reports able to talk to familiar people on the telephone but anxious with unfamiliar people.\n\nIt is therefore likely she needs communication support to be able to express or understand complex verbal information to an acceptable standard.',

  readingunderstandingSelect:'Needs prompting to be able to read or understand complex written information',
  readingunderstandingReason:'CQ reports difficulty reading and understanding written information.\n\nConsistent with the nature of the reported condition, supported by Care Plan as staff help to dial numbers on her telephone and the CQ reports use of picture aids around her home.\n\nIt is therefore likely she needs prompting to be able to read and understand complex written information to an acceptable standard.',

  facetofaceSelect:'Needs social support to be able to engage with other people',
  facetofaceReason:'CQ reports she is unable to engage with males and interaction with females is limited to carers and a small number of friends.\n\nAlthough the Care Plan reports the use of private taxis, she is risk assessed before going out alone and calls advocate for support when anxious. Support worker suggests a lack of risk awareness and vulnerability consistent with reported condition and mental health medications evidenced.\n\nIt is therefore likely she needs social support to be able to engage with other people to an acceptable standard.',

  budgetingSelect:'Needs prompting or assistance to be able to make simple budgeting decisions',
  budgetingReason:'CQ reports limited awareness of the value of money and she is supported with finances.\n\nConsistent with reported condition and support worker confirming supported accommodation and help with change. Restriction with making budgeting decisions is consistent with the overall evidence.\n\nIt is therefore likely she needs assistance to be able to make simple budgeting decisions to an acceptable standard.',

  // journeysSelect:'Cannot follow the route of a familiar journey without another person, an assistance dog or an orientation aid',
  // journeysReason:'CQ reports she usually is accompanied when out due to a lack of awareness and vulnerability.\n\nCare Plan reports able to attend activities private taxis on her own however this is a learnt route that has been risk assessed and uses the same driver. Support worker confirms she lacks awareness and the select places she goes are around people who know her and about her restrictions. It is unlikely she would be able to manage disruptions or changes on learnt routes.\n\nIt is therefore likely she cannot follow the route of a familiar journey without another person safely.',

  movingaroundSelect:'Can stand and then move more than 50 metres but no more than 200 metres, either aided or unaided',
  movingaroundReason:'CQ reports restricted walking due to asthma and arthritis which worsens in cold weather.\n\nSupport worker reports she is able to walk up to 200 metres but slows and stops due to pain and discomfort. Medications list confirms pain relief and treatments for asthma, no evidence of further planned treatment or surgical input for arthritis.\n\nIt is therefore likely she can stand and then move more than 50 metres but no more than 200 metres unaided reliably.',

  observations:'Luisa was driven to assessment by support worker and assisted from the waiting area to the assessment room (12 metres) at a slow pace.\n\nLuisa was very quiet and allowed Support Worker to speak for her on most occasions, agreeing with short phrases or nods. She was dressed appropriately, but Support Worker indicated that staff chose and assisted with the outfit.',
  physicalhealth:'Support worker confirmed are further symptoms of pain and discomfort in her right leg consistent with arthritis. The CQ also reports long term asthma and high blood pressure.',
  mentalstate:'Support worker confirms symptoms of anxieties, self-injurious behaviours, self-neglect, poor motivation and low mood consistent with depression and anxiety.',
  variability:'Functional restrictions identified are present for majority of days.',

  // dl:'Yes',
  // qp:'Yes',
  // whenreview:'No future assessments required',
  // reviewtimereasons:'Although there is potential for change in relation to her arthritis, the nature of her learning disability is life long and she has experienced anxiety for many years and therefore significant functional change overall is unlikely.',
  
  





  //WCA example assessment - made up example for training and research purposes


  conditionhistory:'Alcohol Misuse\n\nHe has always been a heavy drinker, right from being a teenager. Thinking about it, he realises his father was an alcoholic, though he was never diagnosed as such.\n\nHe started drinking even more about 3 years ago when his marriage broke up. They had to sell the family home as part of the divorce which he found devastating. He moved into a small 2 bedroom house after this. Living alone, over time he got into the habit of drinking a bottle of wine every night, due in part to boredom and loneliness. Then a year ago his eldest son got into some trouble with the authorities. It was a terrible time. It was a very public issue and everyone locally was talking about it. His ex-wife blamed him for their son’s behaviour. He had to take time off work because of stress. Whilst off work he began drinking during the day. It got to the point that he was drinking as soon as he woke up. He was drinking 2-3 bottles of wine a day. When he returned to work after a month, he would drink before work and during break times. He thought he was hiding it from his employers quite well, but they confronted him about it and after several warnings with no reduction in his drinking he was dismissed.\n\nAfter losing his job, his drinking worsened. He started drinking vodka as well as the wine. Life seemed very grim and he could not be bothered to wash, dress, eat or keep the house in order. He felt very low and could not see a way out. He started collecting paracetamol tablets with the thought of taking an overdose. He didn’t think anyone would miss him. His daughter found the boxes and called his GP. He had never made any previous attempts. His GP referred him for urgent residential detox. He started this 4 months ago and finished 4 weeks ago. He thought it was very good, as he had counselling and therapy that helped him understand why he was drinking so much. He has not had a drink since finishing the detox.\n\nHe hopes that he will remain dry but is worried that any additional stress will cause him to start drinking again. He feels it is still very early days for him. He now only has fleeting thoughts of suicide; he has no plans or intent. He thinks about his daughter and he could not do anything to upset her.\n\nHigh blood pressure\n\nThis was diagnosed 4 years ago. He was commenced on medication and his blood pressure (BP) has been stable since. He gets his BP checked every 3 months by the GP practice nurse.',
  medication:'Bendroflumethiazide 2.5mg daily\n\nNo reported side effects from medication',
  socialandwork:'He lives alone in a 2 bedroom house. Has 2 adult children.\n\nHe worked in a hardware shop until he was sacked for being intoxicated at work 8 months ago.\n\nHe attended the assessment centre alone. Walked to the assessment centre, this took about 25 minutes.',
  typicalday:'He generally sleeps well. Sometimes he lies awake worrying about things, maybe once or twice a week. He gets out of bed when he wakes up, generally between 7 and 8 am. He gets washed and dressed every day.\n\nHe does some of the housework and his daughter does the rest. He has never been great at housework to be honest, but he is managing to keep his house clean and reasonably tidy at the moment. He prepares his own meals; he manages to cook simple meals and is trying to eat healthily at present. His daughter invites him over for a roast dinner about once a week. He will travel by bus to visit his daughter, a journey of about 20 minutes. Sometimes she has some of her friends over and he enjoys the company of different people, although he makes sure he stays away from any alcohol if they bring any with them.\n\nHe spends the day watching TV or listening to the radio. He likes Radio 5 Live. He does not have a computer and has never learned to use one. He has a mobile phone which he uses to keep in touch with his daughter.\n\nHe goes to the supermarket with his daughter to get his weekly shopping. He feels his daughter’s presence stops him from thinking about buying alcohol.\n\nHe avoids the alcohol aisles in the supermarket and stays away from the local shop as that is where he used to get all his alcohol previously. He doesn’t want to get back into old habits, but worries that he might.\n\nHe has a car, but lost his licence for drink driving 7 months ago, therefore is not driving currently.\n\nHis daughter has also helped him find a couple of groups he can attend at the local community centre, one on art and one on learning to use a computer and internet.\n\nHe thinks it is good to get out of the house and keep occupied. He has met some interesting new people. It’s a 10 minute walk from his house.\n\nHe attends ongoing outpatient counselling once a week. He goes on his own and catches a bus to these appointments. The journey takes about 30 minutes. He gets a bit irritated if there are any route diversions or delays to the appointment however he has never lost his temper and can still cope with the day.\n\nHe doesn’t see any old friends. Some he lost through the divorce and others he avoided at the time of his son’s troubles. He felt embarrassed and thought they would judge him.',

  lcw:'Risk to mental or physical health (LCW)',
  lcwreasons:'Please be advised that LCW substantial risk applies in this case but not LCWRA substantial risk. Risk factors: including living alone, alcohol abuse with recent detoxification, divorce, family problems and suicidal thoughts.\n\nPositive factors: he functions well and is starting to interact with new people, has a supportive daughter, no suicidal plans or intent, he is engaged in treatment and has good insight.\n\nMr Mackie has hypertension for which he takes medication, this is well-controlled and unlikely to cause any significant functional restriction.\n\nHe has a history of alcohol misuse and has recently undergone residential detox treatment. He manages to live independently and keep his house clean and tidy. Although he goes shopping with his daughter he is able to go out alone and uses public transport. He attends groups at the local college and his weekly counselling session. There is no evidence to suggest behavioural problems. On mental state examination he had some low mood and anxiety but managed to cope with the assessment. Significant functional restriction of mental health activities seems unlikely.\n\nDespite current function appearing reasonably good, he is unemployed, lives alone, and still has some suicidal thoughts although no plans or intent. He is still receiving support following recent detoxification and has significant upcoming stressors in the short term. These would suggest that he is likely to be at substantial risk of relapse and deterioration in his mental health if found capable of work.\n\nHowever he should be capable of performing appropriately tailored work-related activity.',
  whenreviewlcw:'3 months',
  reviewtimereasonslcw:'3 months for the functional problems and 6 - 12 months for the exceptional circumstances (non functional descriptors)',


  // whenreviewlcwra
  // reviewtimereasonslcwra:'He knows he is doing well but feels very anxious about returning to work right now. He does not feel ready to return to work. He thinks the additional stress of looking for a job will cause him to start drinking again. The detox team have told him that they will refer him to a programme that will help him prepare for returning to work in a couple of months time if he continues to remain dry./n/nHe does have a few stressful events coming up in the next month or so. His son’s circumstances will be changing again, so he is feeling very anxious about that. Also his daughter is getting married and it will be the first time he will see his ex-wife since the son’s troubles. He knows there will be alcohol at the wedding and he is not sure how he is going to get through the day. He is going to talk to the alcohol counsellor about this at the next visit. His daughter has been very supportive, and has told him that she will be by his side to support him no matter what.',
  






  //WCA example assessment - made up example for training and research purposes


  // conditionhistory:'Condition 1\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n Condition 2\n \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  // medication:'Medication 1 \nAsprin 50g 1 time per day\n\n Medication 2 \nParacetmool 50g 3 time per day',
  // socialandwork:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  // typicalday:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  // lcw:'Risk to mental or physical health (LCW)',
  // lcwreasons:'Please be advised that LCW substantial risk applies in this case but not LCWRA substantial risk. Risk factors: including living alone, alcohol abuse with recent detoxification, divorce, family problems and suicidal thoughts.\n\nPositive factors: he functions well and is starting to interact with new people, has a supportive daughter, no suicidal plans or intent, he is engaged in treatment and has good insight.\n\nMr Mackie has hypertension for which he takes medication, this is well-controlled and unlikely to cause any significant functional restriction.\n\nHe has a history of alcohol misuse and has recently undergone residential detox treatment. He manages to live independently and keep his house clean and tidy. Although he goes shopping with his daughter he is able to go out alone and uses public transport. He attends groups at the local college and his weekly counselling session. There is no evidence to suggest behavioural problems. On mental state examination he had some low mood and anxiety but managed to cope with the assessment. Significant functional restriction of mental health activities seems unlikely.\n\nDespite current function appearing reasonably good, he is unemployed, lives alone, and still has some suicidal thoughts although no plans or intent. He is still receiving support following recent detoxification and has significant upcoming stressors in the short term. These would suggest that he is likely to be at substantial risk of relapse and deterioration in his mental health if found capable of work.\n\nHowever he should be capable of performing appropriately tailored work-related activity.',
  // whenreviewlcw:'3 months',
  // reviewtimereasonslcw:'3 months for the functional problems and 6 - 12 months for the exceptional circumstances (non functional descriptors)',


  // whenreviewlcwra
  // reviewtimereasonslcwra
  // He knows he is doing well but feels very anxious about returning to work right now. He does not feel ready to return to work. He thinks the additional stress of looking for a job will cause him to start drinking again. The detox team have told him that they will refer him to a programme that will help him prepare for returning to work in a couple of months time if he continues to remain dry./n/nHe does have a few stressful events coming up in the next month or so. His son’s circumstances will be changing again, so he is feeling very anxious about that. Also his daughter is getting married and it will be the first time he will see his ex-wife since the son’s troubles. He knows there will be alcohol at the wedding and he is not sure how he is going to get through the day. He is going to talk to the alcohol counsellor about this at the next visit. His daughter has been very supportive, and has told him that she will be by his side to support him no matter what.',
  


  // Insert values here

}
