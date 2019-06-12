import { h } from 'preact';
import { createComponent } from 'preact-fela';
import Layout from './Layout';

const Content = createComponent(() => ({
	marginTop: '35px'
}));

const Terms = ({ appName, adminOrgName, logoUrl }) => (
    <Layout>
        <Logo src={logoUrl}/>
        <Content>
            <h1>{appName} Terms of Service</h1>

            <p>These Terms of Service constitute a contract between you and {adminOrgName}
            (“{adminOrgName}”) relating to your use of {appName} Application found at: www.{appName}.com
            (“{appName}”).</p>

            <h2>Disclaimer.</h2><p>{adminOrgName} HEREBY DISCLAIMS ANY LIABILITY ARISING
            FROM THE USE OF {appName}. {appName}, AND THE INFORMATION CONTAINED
            ON {appName} IS PROVIDED AS-IS, WITH NO WARRANTIES. ST ANTHONY
            DOES NOT PROVIDE ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
            BUT NOT LIMITED TO THE WARRANTIES OF NON-INFRINGEMENT OF THIRD
            PARTY RIGHTS, TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE OR FREEDOM FROM COMPUTER VIRUS, WITH RESPECT TO LINK-
            SF, THE INFORMATION CONTAINED ON {appName}, OR THE LINKS
            CONTAINED ON {appName}. THE ORGANIZATIONS AND SERVICES LISTED ON
            {appName} ARE NOT NECESSARILY AFFILIATED WITH ST ANTHONY, AND
            INCLUSION OF SUCH ORGANIZATIONS AND SERVICES ON {appName} DOES
            NOT CONSTITUTE ENDORSEMENT OR SPONSORSHIP BY ST ANTHONY. USE
            OF {appName} IS AT THE USER’S OWN RISK.
            YOU ACKNOWLEDGE, BY YOUR USE OF ANY OF {appName}, THAT YOUR USE
            OF {appName} AND ANY RELIANCE UPON EITHER IS AT YOUR SOLE RISK AND
            THAT YOU ASSUME FULL RESPONSIBILITY FOR ALL COSTS ASSOCIATED
            WITH YOUR USE OF {appName}.  YOU AGREE THAT, TO THE FULLEST EXTENT
            PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES SHALL ST
            ANTHONY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL OR
            CONSEQUENTIAL DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES
            FOR LOSS OF PROFITS, USE, IMAGES, DATA OR OTHER INTANGIBLES, EVEN
            IF ST ANTHONY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES, THAT RESULT FROM THE USE OR THE INABILITY TO USE LINK-
            SF OR FROM ANY CHANGES TO {appName}.
            YOU AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
            LAW, THAT UNDER NO CIRCUMSTANCES SHALL ST ANTHONY BE LIABLE
            OR RESPONSIBLE FOR HARM OR DAMAGES ARISING FROM YOUR USE OF
            THE INFORMATION, FACTS, AND OPINIONS AVAILABLE ON {appName}
            (INCLUDING ANY LINKS ON {appName}) OR ARISING OUT OF ANY ACTION
            TAKEN IN RESPONSE TO OR AS A RESULT OF ANY INFORMATION, FACTS,
            AND OPINIONS AVAILABLE ON {appName}. YOU HEREBY WAIVE ANY AND
            ALL CLAIMS AGAINST {adminOrgName} ARISING OUT OF YOUR USE OF LINK-
            SF AND THE INFORMATION, FACTS, AND OPINIONS AVAILABLE THEREON.
            YOU AGREE TO ASSUME RESPONSIBILITY FOR ANY HARM OR DAMAGES
            OF ANY KIND OR CHARACTER WHATSOEVER RESULTING FROM YOUR USE
            OF {appName}.</p>

            <h2>Restrictions on Use.</h2><p>You may not (a) modify, adapt, or hack {appName} or otherwise
            attempt to gain unauthorized access to Link SF’s related systems or networks; (b) sell,
            resell, or exploit for any commercial purposes any part of {appName} (c) falsely imply any
            sponsorship or association with St Anthony, (d) use {appName} in any unlawful manner; (e)
            use {appName} to store or transmit files, materials, data, text, audio, video, images or other
            content that infringes on any person’s intellectual property rights; (f) use the Service in
            any manner that interferes with or disrupts the integrity or performance of {appName} and
            its components; (g) attempt to decipher, decompile, reverse engineer or otherwise
            discover the source code of any software making up {appName}; (h) use {appName} to transmit
            any “protected health information” as that term is defined in 45 C.F.R. 160.103; (i) use
            {appName} to knowingly post transmit, upload, link to, send or store any viruses, malware,
            Trojan horses, time bombs, or any other similar harmful software; or (j) try to use, or use
            {appName} in violation of these Terms of Service.

            </p><h2>Intellectual Property.</h2><p>Nothing contained herein shall be construed as conferring any
            license or right, by implication, estoppel or otherwise, under copyright or other
            intellectual property rights. All intellectual property rights in the contents of {appName} are
            owned by {adminOrgName}. {adminOrgName}’s rights to the content of {appName} are protected by
            national and international copyright, trademark, and other intellectual property laws and
            treaties.</p>

            <h2>Linking to {appName}.</h2><p>If you link to {appName}, you agree not to (1) imply that {adminOrgName}
            is endorsing you or your products and services; (2) imply an affiliation between you and
            {adminOrgName} without our prior written consent; (3) present false or misleading
            impressions about {appName} or {adminOrgName}; or (4) link to materials that may be
            interpreted as distasteful or offensive.
            In establishing links, you must not represent in any way, expressly or implicitly, that you
            have received the endorsement, sponsorship or support of {appName}.  You agree to remove
            any links you have to {appName} upon {adminOrgName}’s request.

            </p><h2>Modifications.</h2><p>{adminOrgName} may modify these Terms of Service at any time, and such
            modifications shall be effective and binding upon you immediately upon posting to Link-
            SF. Such posting will constitute notice to you of such amendments to these Terms of
            Service. It is your responsibility to review these Terms of Service to apprise yourself of
            any such modifications to the Terms of Service.
            {adminOrgName} may terminate, change, suspend or discontinue any aspect of {appName},
            including the availability of any features of {appName}, at any time. {adminOrgName} may also
            impose limits on certain features and services or restrict your access to parts or all of
            {appName} without notice or liability.
            The officers, agents, directors, and consultants (including Zendesk, Inc.) of {adminOrgName}
            shall have no liability to you under this Agreement or by operation of law. The officers,
            agents, directors, and consultants of {adminOrgName} disclaim any liability arising from your
            use of {appName}. The officers, agents, directors, and consultants of {adminOrgName} do not
            provide any warranties, express or implied, including but not limited to the warranties of
            non-infringement of third party rights, title, merchantability, fitness for a particular
            purpose.</p>

            <h2>Choice of Law and Venue.</h2><p>These Terms of Service shall be governed by and construed
            in accordance with the laws of the State of California, without regard to its choice of law
            provisions. You and {adminOrgName} agree to submit to the personal and exclusive
            jurisdiction of the federal and state courts located within San Francisco, California. These
            Terms of Service, including any modifications hereto constitute the entire agreement
            between {adminOrgName} and you, and supersedes all prior understandings and agreements,
            whether written or oral, as to such subject matter.

            </p><h2>Location Based Service.</h2><p>{appName} is a location-based service, so {adminOrgName} necessarily
            collects and uses the location of users’ mobile devices or location-based data to provide
            the service. By using {appName}, you authorize {adminOrgName} to access your location, and
            waive any claim against St Anthony for accessing your location. To the extent that the
            location-based data {adminOrgName} collects is or can be readily combined with other data to
            personally identify you, {adminOrgName} will treat such data in the same way as other
            personal information. {adminOrgName} will only use your location as necessary to provide
            {appName} as a service and as may be required to comply with the law.

            </p><h2>Information Collected by {appName}.</h2><p>Aside from your location, St Anthony may collect
            information about that you that you may disclose through {appName}’s feedback form. St.
            Anthony will not collect any personally identifiable information about you unless you
            provide it voluntarily through {appName}’s feedback form.</p>

            <h2>Information Collected by Other Services.</h2><p>{appName} uses Formspree
            (https://formspree.io/) to send emails from {appName}’s feedback form. Formspree and the
            services it uses may collect information about you that you disclose through {appName}’s
            feedback form. Formspree and the services it uses will not collect any personally
            identifiable information about you unless you provide it voluntarily through {appName}’s
            feedback form.</p>

            <h2>Cookies.</h2><p>{appName} uses cookies. A cookie is a small file placed on your computer's hard
            drive to identify you as a user, and facilitate your ongoing access to the use of {appName}.
            {adminOrgName} does not use cookies to collect any personal or identifying information about
            users, nor does {adminOrgName} sell or make them available to third parties.
            You may disable the cookie function on your browser or erase the contents in your
            cookie file by altering the configuration of your browser. If you choose to refuse cookies,
            however, it is possible that {appName} will not function properly.</p>
            <h2>Disclosure of Personal Information.</h2><p>We disclose personal information to respond to
            subpoenas, court orders, or legal process, or to establish or exercise our legal rights or
            defend against legal claims. We may also share such information if we believe it is
            necessary in order to investigate, prevent, or take action regarding illegal activities,
            suspected fraud, situations involving potential threats to the physical safety of any person,
            violations of our Terms of Service, or as otherwise required by law.
            {adminOrgName} may share information with any entity that controls, is controlled by, or
            under common control with St Anthony. We do not sell any of your information to any
            third parties.</p>
            <h2>Log Files.</h2><p>As with most other websites, we collect and use the data contained in log
            files. The information in the log files include your IP (internet protocol) address, your ISP
            (internet service provider), the browser you used to visit our site (such as Internet
            Explorer or Firefox), the time you visited our site and which pages you visited throughout
            our site.</p>
            <h2>Third Party Links.</h2><p>{appName} contains links to websites operated by third parties (“Third
            Party”). Please be aware that we do not determine and we are not responsible for the
            privacy practices or content of websites and applications operated by Third Parties. We
            encourage you to be aware when you leave {appName}, and read the privacy statements of
            Third Party websites and applications linked to the Service. Zendesk does not endorse
            and is not responsible for the practices of these Third Parties or their websites or
            applications. This Privacy Policy applies only to information collected by {adminOrgName}
            through {appName}.</p>
        </Content>
    </Layout>
);

export default Terms;
