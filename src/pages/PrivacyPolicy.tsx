import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">
              <span className="text-primary">Healt</span>
              <span className="text-foreground">Haven</span>
            </a>
            <nav>
              <a
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Back to Home
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 11, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-8 space-y-8">

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Welcome to Healthaven. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. By using Healthaven, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>

                <div className="text-muted-foreground space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Information You Provide to Us</h3>
                    <div className="space-y-3">
                      <p>
                        <span className="font-semibold text-foreground">Account Information:</span> When you create an account, we collect information such as your name, email address, date of birth, username, and password.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Profile Information:</span> You may choose to provide additional information such as gender, location, profile photo, and biographical information.
                      </p>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Health Information (Sensitive Personal Data):</p>
                        <p className="mb-2">You may voluntarily provide health-related information including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Health goals and preferences</li>
                          <li>Physical activity data</li>
                          <li>Nutrition and dietary information</li>
                          <li>Sleep patterns</li>
                          <li>Weight and body measurements</li>
                          <li>Symptoms and health conditions</li>
                          <li>Medications and supplements</li>
                          <li>Medical history</li>
                        </ul>
                        <p className="mt-3 italic bg-muted/50 p-3 rounded">
                          <span className="font-semibold text-foreground">Important Note for Nigerian Users:</span> Health information is classified as "sensitive personal data" under Nigerian law and receives enhanced protection. We will obtain your explicit consent before processing any health-related information and apply additional security measures.
                        </p>
                      </div>
                      <p>
                        <span className="font-semibold text-foreground">Communications:</span> When you contact us, we collect the information you provide in your messages, including your name, contact information, and the content of your communications.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">User Content:</span> Any content you post, upload, or share on Healthaven, including comments, forum posts, and reviews.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Payment Information:</span> If you make purchases, we collect payment card information and billing details through our secure payment processors.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Information Collected Automatically</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Usage Data:</p>
                        <p className="mb-2">We automatically collect information about how you interact with our services, including:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Pages viewed and features used</li>
                          <li>Time spent on pages</li>
                          <li>Links clicked</li>
                          <li>Search queries</li>
                          <li>Access times and frequency of use</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Device Information:</p>
                        <p className="mb-2">We collect information about the devices you use to access Healthaven, including:</p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Device type and model</li>
                          <li>Operating system and version</li>
                          <li>Browser type and version</li>
                          <li>IP address</li>
                          <li>Device identifiers</li>
                          <li>Mobile network information</li>
                        </ul>
                      </div>
                      <p>
                        <span className="font-semibold text-foreground">Location Information:</span> With your permission, we may collect precise or approximate location data from your device.
                      </p>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Cookies and Similar Technologies:</p>
                        <p className="mb-2">We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities.</p>
                        <div className="mt-3 bg-muted/50 p-3 rounded space-y-2">
                          <p className="font-semibold text-foreground">Important for Nigerian Users:</p>
                          <p>Under Article 19 of Nigeria's General Administrative and Implementation Directive (GAID), we obtain opt-in consent before using non-essential cookies. Our cookie banner:</p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Appears clearly when you first visit our site</li>
                            <li>Explains what cookies we use and why</li>
                            <li>Allows you to provide specific, informed consent</li>
                            <li>Enables you to withdraw consent at any time</li>
                            <li>Does not use pre-ticked boxes or implied consent from scrolling</li>
                          </ul>
                          <p className="mt-2">Essential cookies that enable core security and functionality may operate without consent, provided they don't handle sensitive, financial, or private data.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">2.3 Information from Third Parties</h3>
                    <div className="space-y-3">
                      <p>
                        <span className="font-semibold text-foreground">Social Media:</span> If you connect your account with social media platforms, we may receive information from those platforms in accordance with your privacy settings.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Health Devices and Apps:</span> With your permission, we may collect data from connected health devices and third-party health applications.
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Analytics Partners:</span> We receive information from analytics providers about how users interact with our services.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We use the information we collect for the following purposes:</p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3.1 To Provide and Improve Our Services</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Create and manage your account</li>
                      <li>Provide personalized health content and recommendations</li>
                      <li>Track your progress toward health goals</li>
                      <li>Enable communication features</li>
                      <li>Respond to your requests and provide customer support</li>
                      <li>Improve and optimize our services</li>
                      <li>Develop new features and functionality</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3.2 For Research and Analytics</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Conduct research and analysis to understand user behavior</li>
                      <li>Generate aggregated and de-identified data for research purposes</li>
                      <li>Improve health recommendations and content</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3.3 For Communication</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Send you service-related notifications</li>
                      <li>Provide updates about new features and content</li>
                      <li>Send marketing communications (with your consent)</li>
                      <li>Respond to your inquiries and provide support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3.4 For Safety and Security</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Detect, prevent, and address fraud and security issues</li>
                      <li>Protect against malicious, deceptive, or illegal activity</li>
                      <li>Enforce our Terms of Service</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3.5 For Legal Purposes</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Comply with applicable laws and regulations</li>
                      <li>Respond to legal requests and prevent harm</li>
                      <li>Protect our rights and property</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. How We Share Your Information
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">We do not sell your personal information.</p>
                  <p>We may share your information in the following circumstances:</p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.1 With Your Consent</h3>
                    <p>We may share your information when you give us explicit permission to do so.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Service Providers</h3>
                    <p className="mb-2">We share information with third-party service providers who perform services on our behalf, including:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cloud hosting providers</li>
                      <li>Analytics services</li>
                      <li>Payment processors</li>
                      <li>Customer support tools</li>
                      <li>Email delivery services</li>
                      <li>Marketing platforms</li>
                    </ul>
                    <p className="mt-2">These service providers are contractually obligated to protect your information and may only use it as necessary to provide services to us.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Business Transfers</h3>
                    <p>If Healthaven is involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred as part of that transaction. We will notify you before your information is transferred and becomes subject to a different privacy policy.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.4 Legal Requirements</h3>
                    <p className="mb-2">We may disclose your information if required to do so by law or in response to valid requests by public authorities, including to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Comply with legal obligations</li>
                      <li>Protect and defend our rights or property</li>
                      <li>Prevent or investigate possible wrongdoing</li>
                      <li>Protect the personal safety of users or the public</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.5 Aggregated or De-identified Data</h3>
                    <p>We may share aggregated or de-identified information that cannot reasonably be used to identify you for research, marketing, or other purposes.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.6 Health Research Partners</h3>
                    <p>With your explicit consent, we may share de-identified health data with research institutions and partners conducting health studies.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Your Privacy Rights and Choices
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Access and Update Your Information</h3>
                    <p>You can access and update your account information at any time through your account settings.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Delete Your Information</h3>
                    <p>You can request deletion of your account and personal information by contacting us at privacy@Healthaven.com. Please note that we may retain certain information as required by law or for legitimate business purposes.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Marketing Communications</h3>
                    <p>You can opt out of receiving marketing emails by clicking the "unsubscribe" link in any marketing email or by adjusting your communication preferences in your account settings.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5.4 Cookie Preferences</h3>
                    <p>You can control cookies through your browser settings. Please note that disabling cookies may affect your ability to use certain features of our services.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5.5 Do Not Track</h3>
                    <p>Some browsers have a "Do Not Track" feature. Currently, we do not respond to Do Not Track signals.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5.6 Rights Under Privacy Laws</h3>
                    <p className="mb-2">Depending on your location, you may have additional rights, including:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><span className="font-semibold text-foreground">Right to Access:</span> Request a copy of the personal information we hold about you.</li>
                      <li><span className="font-semibold text-foreground">Right to Rectification:</span> Request correction of inaccurate or incomplete information.</li>
                      <li><span className="font-semibold text-foreground">Right to Erasure:</span> Request deletion of your personal information under certain circumstances.</li>
                      <li><span className="font-semibold text-foreground">Right to Restrict Processing:</span> Request that we limit how we use your information.</li>
                      <li><span className="font-semibold text-foreground">Right to Data Portability:</span> Request a copy of your information in a structured, commonly used format.</li>
                      <li><span className="font-semibold text-foreground">Right to Object:</span> Object to our processing of your information for certain purposes.</li>
                      <li><span className="font-semibold text-foreground">Right to Withdraw Consent:</span> Withdraw your consent at any time where we rely on consent to process your information.</li>
                    </ul>
                    <p className="mt-2">To exercise these rights, please contact us at privacy@Healthaven.com.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Data Security
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                  <p>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy. When determining retention periods, we consider:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The nature and sensitivity of the information</li>
                    <li>The purposes for which we process the information</li>
                    <li>Legal and regulatory requirements</li>
                    <li>Our legitimate business interests</li>
                  </ul>
                  <p>When we no longer need your information, we will securely delete or anonymize it.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Children's Privacy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Healthaven is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at privacy@Healthaven.com, and we will delete such information.</p>
                  <p>Users between 13 and 18 may only use Healthaven with parental or guardian consent and supervision.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. International Data Transfers
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Healthaven is based in [Your Country]. If you access our services from outside [Your Country], your information may be transferred to, stored, and processed in [Your Country] or other countries where our service providers operate.</p>
                  <p>We take appropriate measures to ensure that your information receives an adequate level of protection in accordance with applicable data protection laws.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Third-Party Links and Services
                </h2>
                <div className="text-muted-foreground">
                  <p>Our services may contain links to third-party websites, applications, or services. This Privacy Policy does not apply to those third-party services. We encourage you to review the privacy policies of any third-party services before providing them with your information.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Health Information and HIPAA
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">Important Note:</p>
                  <p>Healthaven is a wellness platform and is not a covered entity under the Health Insurance Portability and Accountability Act (HIPAA). The health information you provide to Healthaven is not protected by HIPAA. However, we are committed to protecting your health information in accordance with this Privacy Policy and applicable privacy laws.</p>
                  <p>If you are seeking HIPAA-protected services, please consult with a healthcare provider or covered entity.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  12. California Privacy Rights
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-semibold text-foreground">Right to Know:</span> You can request information about the categories and specific pieces of personal information we have collected about you.</li>
                    <li><span className="font-semibold text-foreground">Right to Delete:</span> You can request deletion of your personal information.</li>
                    <li><span className="font-semibold text-foreground">Right to Opt-Out:</span> You can opt out of the sale of your personal information (note: we do not sell personal information).</li>
                    <li><span className="font-semibold text-foreground">Right to Non-Discrimination:</span> You have the right not to receive discriminatory treatment for exercising your privacy rights.</li>
                  </ul>
                  <p>To exercise these rights, contact us at privacy@Healthaven.com or call [Phone Number].</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  13. Nigeria Data Protection Rights (NDPA)
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>If you are in Nigeria or we process your personal data as a Nigerian resident, you have rights under the Nigeria Data Protection Act 2023 (NDPA):</p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Legal Basis for Processing</h3>
                    <p className="mb-2">We process your information based on:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Your explicit consent</li>
                      <li>Performance of a contract with you</li>
                      <li>Legal obligations under Nigerian law</li>
                      <li>Protection of vital interests</li>
                      <li>Legitimate interests that do not override your fundamental rights</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Consent Requirements</h3>
                    <p className="mb-2">Under the NDPA, consent must be:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><span className="font-semibold text-foreground">Explicit:</span> Through affirmative action or written/spoken statement</li>
                      <li><span className="font-semibold text-foreground">Freely given:</span> Without pressure or coercion</li>
                      <li><span className="font-semibold text-foreground">Specific:</span> Limited to specified purposes</li>
                      <li><span className="font-semibold text-foreground">Informed:</span> With clear information about data use</li>
                      <li><span className="font-semibold text-foreground">Unambiguous:</span> Through clear opt-in actions (not pre-ticked boxes or continued scrolling)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Your Rights Under NDPA</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-semibold text-foreground">Right to Access:</span> Request confirmation of whether we process your data and obtain a copy.</li>
                      <li><span className="font-semibold text-foreground">Right to Rectification:</span> Correct inaccurate or incomplete personal data.</li>
                      <li><span className="font-semibold text-foreground">Right to Erasure:</span> Request deletion of your data under certain conditions.</li>
                      <li><span className="font-semibold text-foreground">Right to Object:</span> Object to processing of your data for specific purposes.</li>
                      <li><span className="font-semibold text-foreground">Right to Data Portability:</span> Request your data in a portable format.</li>
                      <li><span className="font-semibold text-foreground">Right to Restrict Processing:</span> Limit how we process your data.</li>
                      <li><span className="font-semibold text-foreground">Right to Withdraw Consent:</span> Withdraw consent at any time.</li>
                      <li><span className="font-semibold text-foreground">Right to Object to Automated Decisions:</span> Object to decisions based solely on automated processing.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Sensitive Health Data</h3>
                    <p>We recognize that health information is classified as sensitive personal data under Nigerian law. We apply enhanced security measures and obtain explicit consent before processing your health data.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Border Data Transfers</h3>
                    <p>If we transfer your data outside Nigeria, we ensure the destination country provides adequate data protection or we implement appropriate safeguards such as standard contractual clauses. We will only transfer your data internationally with your explicit consent or under legal safeguards.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data Breach Notification</h3>
                    <p className="mb-2">In the event of a data breach that poses a high risk to your rights, we will:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Notify the NDPC within 72 hours of becoming aware of the breach.</li>
                      <li>Notify you immediately with clear information about the breach and steps to protect yourself.</li>
                      <li>Maintain a breach register documenting the incident and our response.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Complaint Rights</h3>
                    <p>You have the right to lodge a complaint with the Nigeria Data Protection Commission if you believe we have violated your data protection rights.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Special Provisions for Children</h3>
                    <p>We comply with enhanced protections for children under 18. For children under 13, we require verifiable parental or guardian consent before processing their data, except where processing is necessary for safeguarding the child's interests, providing healthcare, education, or social services under professional confidentiality.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  14. European Privacy Rights (GDPR)
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>If you are in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR):</p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Legal Basis for Processing</h3>
                    <p className="mb-2">We process your information based on:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Your consent</li>
                      <li>Performance of a contract with you</li>
                      <li>Our legitimate interests</li>
                      <li>Compliance with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Supervisory Authority</h3>
                    <p>You have the right to lodge a complaint with your local data protection authority.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  15. Changes to This Privacy Policy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Posting the updated Privacy Policy on our platform</li>
                    <li>Updating the "Last Updated" date</li>
                    <li>Sending you an email notification (if you have provided an email address)</li>
                  </ul>
                  <p>We encourage you to review this Privacy Policy periodically. Your continued use of Healthaven after changes are posted constitutes your acceptance of the updated Privacy Policy.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  16. Contact Us
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
                  <div className="pl-4 space-y-1">
                    <p className="font-semibold text-foreground">Healthaven Privacy Team</p>
                    <p>Email: privacy@Healthaven.com</p>
                  </div>
                </div>
              </section>

              <div className="border-t border-border pt-6 mt-8">
                <p className="text-muted-foreground text-center italic">
                  Your privacy matters to us. Thank you for trusting Healthaven with your health journey.
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
