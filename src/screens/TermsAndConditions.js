import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Checkbox } from 'react-native-paper';
import Button from "../components/Button";
import Header from '../components/Header';
import Logo from '../components/Logo';

const Separator = () => (
    <View style={styles.separator} />
  );


export default function TermsAndConditions({navigation}) {

    const [checked, setChecked] = React.useState(false);

  return (
    <>
    <Logo/>
    <Header> Terms and Conditions </Header>
    <Separator />
    <ScrollView>
        <View style={styles.container}>
        <Text>
        I.  AGREEMENT TO WEBSITE TERMS OF USE:

        These Terms and Conditions of Use (hereinafter, “Website Terms of Use”) apply to this website 
        located at www.secretchaperone.com, and all associated sites linked to www.secretchaperone.com 
        by Lear Solutions, LLC, its subsidiaries and affiliates (hereinafter, the “Secret Chaperone Site”).  
        The Secret Chaperone Site is the property of Lear Solutions, LLC (hereinafter, “Lear Solutions”).  
        PLEASE UNDERSTAND THAT BY USING THE SECRET CHAPERONE SITE, YOU AGREE TO THESE WEBSITE TERMS OF USE; 
        IF YOU DO NOT AGREE, DO NOT USE THE SECRET CHAPERONE SITE.
        </Text>
        <Separator />
        <Text>
        II. CONTENT: 
        A.  All text, graphics, interfaces, images, photographs, drawings, trademarks, logos, sounds, music, 
        artwork and computer code (hereinafter, “Website Content”), including, but not limited to, the design,  
        “look and feel” and arrangement of such Website Content, contained on the Secret Chaperone Site is 
        exclusively owned by Lear Solutions, and is protected by various intellectual property laws, including, 
        but not limited to, federal and state laws governing unfair competition, trade dress, copyright, patent 
        and trademark laws.

        B.  Except as expressly provided in these Website Terms of Use, no part of the Secret Chaperone Site and 
        no Content may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, 
        translated, transmitted or distributed in any way to any other computer, server, website or other medium 
        for publication or distribution or for any commercial enterprise, without Lear Solutions’s express prior 
        written consent.
        </Text>
        <Separator />
        <Text>
        III.  USE OF THE SITE:  

        A.  You may not use any device, program, algorithm, or any process, to access, acquire, copy or monitor any 
        portion of the Secret Chaperone Site or any Content, or in any way reproduce or circumvent the Secret Chaperone 
        Site or any Content, to obtain or attempt to obtain any materials, documents or information through any means 
        not purposely made available through the Secret Chaperone Site or any Content. 

        B.  You may not attempt to gain unauthorized access to any portion or feature of the Secret Chaperone Site, or any 
        other systems or networks connected to the Secret Chaperone Site or to any Lear Solutions server, or to any of the 
        services offered on or through the Secret Chaperone Site, by hacking, or any other illegitimate means.

        C.  You may not probe or test the vulnerability of the Secret Chaperone Site or any network connected to the Secret 
        Chaperone Site, nor breach the security or authentication measures on the Secret Chaperone Site or any network connected 
        to the Secret Chaperone Site. You may not trace or seek to trace any information on any other user of or visitor to the 
        Secret Chaperone Site, or any other customer of Lear Solutions, including any Lear Solutions or Secret Chaperone account 
        not owned by you for any purpose, including, but not limited to,  exploiting the Secret Chaperone Site or any service or 
        information made available or offered by or through Lear Solutions or the Secret Chaperone Site, for any reason, including, 
        but not limited to, revealing any information, including, but not limited to, personal identification or information, 
        other than your own information, as provided for by the Secret Chaperone Site.

        D.  You agree that you will not take any action that imposes an unreasonable or large load on the infrastructure of 
        the Secret Chaperone Site or any of Lear Solutions’s networks, or any systems or networks connected to the Secret Chaperone 
        Site or to Lear Solutions.

        E.  You agree not to take any action of any kind and/or to use any device or software to interfere or attempt to 
        interfere with the Secret Chaperone Site or any transaction being conducted on the Secret Chaperone Site, or with any 
        other person’s use of the Secret Chaperone Site.

        F.  You may not take any actions, including, but not limited to, manipulating identifiers to disguise the origin of any 
        message or transmittal you send to Lear Solutions on or through the Secret Chaperone Site or any service offered on or 
        through the Secret Chaperone Site. You may not pretend that you are, or you represent someone else, or impersonate any 
        other individual or entity for any reason.

        G.  You may not use the Secret Chaperone Site or any Content for any purpose that is unlawful or prohibited by these 
        Website Terms of Use, or to solicit the performance of any illegal activity or other activity which infringes the rights 
        of Lear Solutions or others.
        </Text>
        <Separator />
        <Text>
        IV. OTHER TERMS AND CONDITIONS

        A.  Additional terms and conditions may apply to purchases of goods and/or services and to specific portions or features
         of the Secret Chaperone Site all of which terms are made a part of these Website Terms of Use by this reference. You 
         agree to abide by such other terms and conditions, including where applicable representing that you are of sufficient 
         legal age to use or participate in such service or feature. If there is a conflict between these Website Terms of Use 
         and the terms posted for or applicable to a specific portion of the Secret Chaperone Site, the terms posted for a specific 
         portion of the Secret Chaperone Site shall control with respect to your use of that portion of the Secret Chaperone Site.

        B.  Lear Solutions’s obligations, if any, with regard to its products and services are governed solely by the agreements 
        pursuant to which they are provided, and nothing on this Secret Chaperone Site should be construed to alter such 
        agreements.
        </Text>
        <Separator />
        <Text>
        V.  CHANGES TO SITE AND SERVICES

        A.  Lear Solutions reserves the right, at its sole discretion, to modify or edit these Website Terms of Use, at any time.  
        You acknowledge, agree, and understand that it is solely your responsibility to check these Website Terms of Use periodically
        for changes.  Lear Solutions reserves the right to notify you of any changes to the Website Terms of Use, but Lear Solutions 
        is not obligated to do so.  You further acknowledge, agree, and understand that your continued use of the Secret Chaperone Site 
        following the posting of changes will mean that you acknowledge, agree, and understand the changes.  In exchange for your 
        obligation to comply with these Website Terms of Use, Lear Solutions grants you  a non-exclusive, non-transferable, personal 
        and limited right to enter and use the Secret Chaperone Site.

        B.  Lear Solutions may also make changes to any products or services offered on the Secret Chaperone Site, or to the applicable
        prices for any such products or services, at any time, without notice. The materials on the Secret Chaperone Site with respect 
        to products and services may be out of date, and Lear Solutions makes no commitment to update the materials on the Secret 
        Chaperone Site with respect to such products and services.

        </Text>
        <Separator/>
        <Text>
        VI. ACCOUNTS, PASSWORDS AND SECURITY

        A.  Certain features or services offered on or through the Secret Chaperone Site may require you to open an account, including, 
        but not limited to, setting up an ID and password. You acknowledge, agree, and understand that you are solely responsible for 
        maintaining the confidentiality of the information you hold for your account, including, but not limited to,  your password, 
        and for any and all activity that occurs under your account as a result of your failing to keep this information secure and 
        confidential. You agree to notify Lear Solutions immediately of any unauthorized use of your account or password, or any other 
        breach of security. You may be held liable for losses incurred by Lear Solutions or any other user of or visitor to the Secret 
        Chaperone Site due to someone else using your Secret Chaperone account as a result of your failure to keep your account 
        information secure and confidential.

        B.  You may not use anyone else’s Secret Chaperone account at any time without the written consent of the holder of that Secret 
        Chaperone account.  You acknowledge, agree, and understand that Lear Solutions will not be liable for any loss or damage arising 
        from your failure to comply with these obligations set forth herein.
        </Text>
        <Separator/>
        <Text>
        VII.  PRIVACY

        You further acknowledge that by using the Secret Chaperone Site, you understand and agree that Internet transmissions are never 
        completely private or secure, and any message or information you send to the Secret Chaperone Site may be read or intercepted 
        by others, even if there is a special notice that a particular transmission is encrypted.
        </Text>
        <Separator/>
        <Text>
        VIII. LINKS TO OTHER WEBSITES

        This Secret Chaperone Site may contain links to other websites. These linked websites are only provided as a convenience. 
        Such linked websites are not under the control of Lear Solutions, and Lear Solutions is not responsible for and does not endorse 
        the content of such linked websites.  You acknowledge, agree, and understand that it is your sole responsibility to make your 
        own independent judgment regarding your interaction with any such linked websites.
        </Text>
        <Separator/>
        <Text>
        IX. DISCLAIMERS

        A.  LEAR SOLUTIONS DOES NOT PROMISE THAT THE SECRET CHAPERONE SITE OR ANY CONTENT, SERVICE OR FEATURE OF THE SECRET CHAPERONE 
        SITE WILL BE ERROR-FREE OR UNINTERRUPTED, OR THAT ANY DEFECTS WILL BE CORRECTED, OR THAT YOUR USE OF THE SECRET CHAPERONE SITE 
        WILL PROVIDE SPECIFIC RESULTS. THE SECRET CHAPERONE SITE AND ITS CONTENT ARE DELIVERED ON AN “AS-IS” AND “AS-AVAILABLE” BASIS. 
        ALL INFORMATION PROVIDED ON THE SECRET CHAPERONE SITE IS SUBJECT TO CHANGE WITHOUT NOTICE. LEAR SOLUTIONS CANNOT ENSURE THAT ANY 
        FILES OR OTHER DATA YOU DOWNLOAD, IF ANY, FROM THE SECRET CHAPERONE SITE WILL BE FREE OF VIRUSES OR CONTAMINATION OR DESTRUCTIVE 
        FEATURES. LEAR SOLUTIONS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY, NON-INFRINGEMENT, 
        MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. LEAR SOLUTIONS DISCLAIMS ANY AND ALL LIABILITY FOR THE ACTS, OMISSIONS AND
        CONDUCT OF ANY THIRD PARTIES IN CONNECTION WITH OR RELATED TO YOUR USE OF THE SECRET CHAPERONE SITE AND/OR ANY OF LEAR SOLUTIONS’S 
        SERVICES.  YOU ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE SECRET CHAPERONE SITE AND ANY OTHER LINKED SITES.  YOUR SOLE REMEDY 
        AGAINST LEAR SOLUTIONS FOR DISSATISFACTION WITH THE SECRET CHAPERONE SITE OR ANY CONTENT IS TO STOP USING THE SECRET CHAPERONE 
        SITE OR ANY SUCH CONTENT. THIS LIMITATION OF RELIEF IS A PART OF THE BARGAIN BETWEEN THE PARTIES.  THIS DISCLAIMER APPLIES TO ANY 
        DAMAGES, LIABILITY OR INJURIES CAUSED BY ANY FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN 
        OPERATION OR TRANSMISSION, COMPUTER VIRUS, COMMUNICATION LINE FAILURE, THEFT OR DESTRUCTION OF OR UNAUTHORIZED ACCESS TO, ALTERATION 
        OF, OR USE, WHETHER FOR BREACH OF CONTRACT, TORT, NEGLIGENCE OR ANY OTHER CAUSE OF ACTION.

        B.  Lear Solutions reserves the right to do any of the following, at any time, without notice: (1) to modify, suspend or terminate
         operation of or access to the Secret Chaperone Site, or any portion of the Secret Chaperone Site, for any reason; (2) to modify
        or change the Secret Chaperone Site, or any portion of the Secret Chaperone Site, and any applicable policies or terms; and (3) to 
        interrupt the operation of the Secret Chaperone Site, or any portion of the Secret Chaperone Site, as necessary to perform routine 
        or non-routine maintenance, error correction, or other changes.
        </Text>
        <Separator/>
        <Text>

        X.  INDEMNITY

        You agree to indemnify and hold Lear Solutions, its officers, directors, shareholders, predecessors, successors in interest, 
        employees, agents, subsidiaries and affiliates, harmless from any claims of any kind made against Lear Solutions that arise in 
        manner from your actions including, but not limited to, demands, losses, liability, claims or expenses, attorneys’ fees, 
        litigation costs and expenses and expert costs incurred by Lear Solutions due to or arising out of or in connection with 
        your use of the Secret Chaperone Site.
        </Text>
        <Separator/>
        <Text>
        XI. LIMITATION OF LIABILITY; WAIVER

        A.  You acknowledge, agree, and understand that in no event will Lear Solutions be liable to you for any indirect, consequential, 
        exemplary, incidental or punitive damages, including lost profits, regardless if Lear Solutions has been advised of the possibility 
        of such damages.

        B.  In the event that Lear Solutions is found to be liable to you for any damage or loss which arises out of or is in any way 
        connected with your use of the Secret Chaperone Site or any Content, Lear Solutions’s liability shall in no event exceed the 
        greater of (1) the total of any subscription or similar fees with respect to any service or feature of or on the Secret Chaperone 
        Site paid in the six months prior to the date of the initial claim made against Lear Solutions, or (2) $500.00 US Dollars.  
        Some jurisdictions do not allow limitations of liability, so the foregoing limitation may not apply to you.
        </Text>
        <Separator/>
        <Text>
        XII.  VIOLATION OF THESE WEBSITE TERMS OF USE

        A.  You acknowledge, agree, and understand that Lear Solutions may disclose any information we have about you (including your 
        identity) if we determine that such disclosure is necessary in connection with any investigation or complaint regarding your use 
        of the Secret Chaperone Site, or to identify, contact or bring legal action against someone who may be causing injury to or 
        interference with Lear Solutions’s rights or property, or the rights or property of visitors to or users of the Secret Chaperone 
        Site, including Lear Solutions’s customers. Lear Solutions reserves the right at all times to disclose any information that 
        Lear Solutions deems necessary to comply with any applicable law, subpoena,  legal process or governmental request. Lear 
        Solutions also may disclose your information when Lear Solutions determines that applicable law requires or permits such disclosure.

        B.  You acknowledge, agree, and understand that Lear Solutions may preserve any transmittal or communication by you with Lear 
        Solutions through the Secret Chaperone Site or any service offered on or through the Secret Chaperone Site, and may also 
        disclose such data if required to do so by law or Lear Solutions determines that such preservation or disclosure is reasonably 
        necessary to (1) comply with legal process, (2) enforce these Website Terms of Use, (3) respond to claims that any such data
         violates the rights of others, or (4) protect the rights, property or personal safety of Lear Solutions, its employees, users 
         of or visitors to the Secret Chaperone Site, and the public.

        C.  You acknowledge, agree, and understand that Lear Solutions may, in its sole discretion and without prior notice, terminate 
        your access to the Secret Chaperone Site and/or block your future access to the Secret Chaperone Site if we determine that you 
        have violated these Website Terms of Use or other agreements or guidelines which may be associated with your use of the Secret 
        Chaperone Site. You also agree that any violation by you of these Website Terms of Use will constitute an unlawful and unfair 
        business practice, and will cause irreparable harm to Lear Solutions, for which monetary damages would be inadequate, and you
         consent to Lear Solutions obtaining any injunctive or equitable relief that Lear Solutions deems necessary or appropriate in 
         such circumstances. These remedies are in addition to any other remedies available at law or in equity.

        D.  You agree that Lear Solutions may, in its sole discretion and without prior notice, terminate your access to the Secret
         Chaperone Site, for cause, including, but not limited to:  (1) requests by law enforcement or other government agencies; 
         (2) a request by you; (3) discontinuance or material modification of the Secret Chaperone Site or any service offered on or
          through the Secret Chaperone Site; and/or (4) unexpected technical issues or problems.

        E.  You agree that Lear Solutions will not be liable to you, to your heirs, or successors, or to any third party for termination
         of your Secret Chaperone account or your access to the Secret Chaperone Site as a result of any violation of these Website
          Terms of Use.
        </Text>
        <Separator/>
        <Text>
            XIII. NATURE OF WEBSITE SERVICES; NEED TO DISCLOSE INFORMATION

            Given the nature of the use of the Secret Chaperone Site, you acknowledge, agree, and understand that Lear Solutions shall 
            have the right to disclose your personal information under various scenarios including, but not limited to: (1) the personal 
            information is requested by any law enforcement official and/or agency conducting an investigation or related proceeding 
            related to you or your whereabouts; (2) the disclosure is necessary in connection with any investigation or complaint regarding 
            your use of the Secret Chaperone Site; (3) Lear Solutions is required to disclose such information to comply with any applicable 
            law, subpoena, legal process or governmental request.  Lear Solutions also may disclose your information when Lear Solutions 
            determines that applicable law requires or permits such disclosure.
        </Text>
        <Separator/>
        <Text>
            XIV.  DISPUTE RESOLUTION
            A.  You agree that all matters relating to your access to or use of the Secret Chaperone Site, including all disputes, will 
            be governed by the laws of the United States and by the laws of the State of Louisiana without regard to its conflicts of 
            laws provisions. You further agree to the personal jurisdiction by and venue in the state and federal courts in Orleans Parish,
            Louisiana, and waive any objection to such jurisdiction or venue.  .

            B.  In the event of any controversy or dispute arises between Lear Solutions and you arising out of or in connection with your
             use of the Secret Chaperone Site, the parties shall attempt, promptly and in good faith, to resolve any such dispute.  If we
              are unable to resolve any such dispute within a reasonable time (not to exceed sixty (60) days), then any such dispute shall
               be subject to mediation as a condition precedent to arbitration or the institution of legal or equitable proceedings by either
                party.  Any such mediation shall take place in New Orleans, Louisiana.

            C.  The parties (Lear Solutions and you) shall endeavor to resolve any disputes by mediation.  Any request for mediation shall
             be filed in writing with the other party.  The request may be made concurrently with the filing of a demand for arbitration 
             but, in such event, mediation shall proceed in advance of arbitration or legal or equitable proceedings, which shall be stayed 
             pending mediation for a period of 60 days from the date of filing, unless stayed for a longer period by agreement of the parties
              or court order.  The parties shall share the mediator’s fee and any filing fees equally.

            D.  Any controversy or dispute that arises between Lear Solutions and you arising out of or in connection with your use of the 
            Secret Chaperone Site that is not resolved by mediation shall be resolved by litigation, in a court of competent jurisdiction 
            and the venue shall be Orleans Parish, Louisiana, except that Lear Solutions SHALL, AT ITS SOLE OPTION AND DISCRETION, require
             that any dispute be submitted to arbitration with the American Arbitration Association.  The election by Lear Solutions shall 
             be made no later than forty-five (45) days following receipt of service of process of any such litigation from any party, or, 
             if the claim is asserted by Lear Solutions, the election to arbitrate may be made upon the filing of a demand for arbitration
              by Lear Solutions.  Notwithstanding, the above, Lear Solutions shall not be deemed to have waived any right it may have to 
              arbitrate its dispute with any party by the filing of litigation against any party.
            </Text>
            <Separator/>
            <Text>
            XV. AVAILABILITY OF SERVICES
            Lear Solutions administers and operates the Secret Chaperone Site from its location in the United States in New Orleans, Louisiana.
              Although the Secret Chaperone Site is accessible worldwide, not all features services discussed, referenced, provided or offered 
              through or on the Secret Chaperone Site are available to all persons or in all geographic locations, or appropriate or available 
              for use outside the United States. Lear Solutions reserves the right to limit, in its sole discretion, the provision and quantity 
              of any feature, product or service to any person or geographic area. Any offer for any feature, product or service made on the 
              Secret Chaperone Site is void where prohibited. If you choose to access the Secret Chaperone Site from outside the United States,
               you do so on your own initiative and you are solely responsible for complying with applicable local laws.
            </Text>
            <Separator/>
            <Text>
            XVI.  MISCELLANEOUS
            A.  You may not use or export or re-export any Content or any copy or adaptation of such Content, or any product or service offered
             on the Secret Chaperone Site, in violation of any applicable laws or regulations, including without limitation United States export 
             laws and regulations.

            B.  These Website Terms of Use contains the entire agreement between Lear Solutions and you with regard to the subject it describes.  
            These Website Terms of Use supersedes all prior agreements, written or oral, with respect to its subject.

            C.  These Website Terms of Use may only be modified or amended by written agreement signed by both you and Lear Solutions. 

            D.  If any term, provision, covenant or condition of these Website Terms of Use , or the application thereof to any person, entity,
             place or circumstance, shall be held by a court or governmental agency of competent jurisdiction to be invalid, unenforceable or 
             void, the remainder of these Website Terms of Use and such term, provision, covenant or condition as applied to other persons, 
             entities, places and circumstances shall remain in full force and effect.

            E.  The titles of the sections of these Website Terms of Use are for reference only, and shall not be considered part of these 
            Website Terms of Use for purposes of its construction or interpretation. 
            </Text>
            <Separator/>
            <Text>
            Privacy Notice/ Policy

            This privacy notice discloses the privacy practices for www.secretchaperone.com.  The policies set forth herein only apply to the 
            personally identifiable information collected by www.secretchaperone.com.  This privacy policy will identify the following for 
            you:

            1.  What personal information is collected from you through the website, how it is used and with whom it may be shared.
            2.  What choices are available to you regarding the use of your personal information/data.   
            3.  The security procedures in place to protect your personal information/data. 
            4.  How you can correct any inaccuracies in the personal information. 


            I.  Information Collection, Use, and Sharing

            A.  The website www.secretchaperone.com (hereinafter, “Secret Chaperone Website”) is owned and run by Lear Solutions, LLC
             (hereinafter, “Lear Solutions”).  Lear Solutions is the sole owner of the information collected on this site.  Lear Solutions
              only has access to/collects information that you voluntarily give us via registration/sign-up at www.secretchaperone.com,
               email or other direct contact from you.  Lear Solutions will not sell or rent this personal information to anyone. 

            B.  Lear Solutions will use your information to respond to you, regarding the reason you contacted us, i.e. use of the Secret 
            Chaperone system. .  Lear Solutions will not share your information with any third party outside of our organization, other 
            than as necessary to fulfill any request you may have, i.e. notifying an identified contact person that you have not updated 
            your status on your Secret Chaperone Account, or for the purposes of complying with requests that Lear Solutions believes 
            requires the disclosure of your information - - i.e., (1) complying with law enforcement officials and/or an agency conducting
             an investigation or related proceeding related to you or your whereabouts; (2) the disclosure is necessary in connection with
              any investigation or complaint regarding your use of the Secret Chaperone Site; (3) Lear Solutions is required to disclose 
              such information to comply with any applicable law, subpoena, legal process or governmental request.  Lear Solutions also may
               disclose your information when Lear Solutions determines that applicable law requires or permits such disclosure.

            C.  Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services,
             or changes to this privacy policy.

            D.  Except as previously specified herein, we do not sell, trade, or otherwise transfer to outside parties your personally 
            identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our 
            business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your 
            information when we believe release is appropriate to operate the Secret Chaperone Site, comply with the law, enforce our site 
            policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be
             provided to other parties for marketing, advertising, or other uses

            II. Your Access to and Control Over Information

            A.  You may opt out of any future contacts from us at any time.  In order to do so, you must contact us via the email address 
            given on our website. 

            B.  In addition, you may also do any of the following at any time by contacting us via the email address given on our website:

            • See what data Lear Solutions has about you, if any. 
            • Change/correct any data Lear Solutions may have about you.
            • Have Lear Solutions delete any data about you, unless the data is specifically needed to continue use of the Secret 
            Chaperone service, unless you are canceling your account. 
            • Express any concern you may have about Lear Solutions’s use of your data.

            III.  Security

            A.  In handling your information, Lear Solutions takes precautions to protect your information.  When you submit sensitive 
            information via the website, your information is protected both online and offline.

            B.  Wherever we collect sensitive information, the information is transmitted to us in a secure way. 

            C.  While we use encryption to protect sensitive information transmitted online, we also protect your information offline. 
             Only employees who need the information to perform a specific job (for example, customer service) are granted access to 
             personally identifiable information.  The computers/servers in which we store personally identifiable information are kept
              in a secure environment. 

            IV. Contact

            If you feel that we are not abiding by this privacy policy, you should contact us immediately via email at info@secretchaperone.com.
        </Text>
    </View>
    </ScrollView>

    <Separator/>

    <View style={styles.checkboxContainer}>
        <Checkbox.Android 
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
            setChecked(!checked);
        }}
        />
            <Text style={styles.label}>I agree to the Terms of Use</Text>
      </View>


    <Button
        mode="outlined"
        onPress={() => 
            navigation.navigate('editProfile')}
      >
        Continue
      </Button>
    </>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        color: 'green'
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
  });