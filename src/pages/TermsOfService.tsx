import { Footer } from "@/components/Footer";

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 11, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-8 space-y-8">

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    Welcome to Healthaven. By accessing or using our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Description of Service
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    Healthaven provides health and wellness information, resources, and tools designed to support your health journey. Our services may include health tracking, educational content, wellness programs, and community features.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Medical Disclaimer
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-foreground">
                    IMPORTANT: Healthaven is not a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p>
                    Our services are for informational and educational purposes only. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on Healthaven.
                  </p>
                  <p>
                    In case of a medical emergency, call your doctor or 911 immediately. Healthaven does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on our platform.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. User Accounts
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Account Creation</h3>
                    <p>
                      You may need to create an account to access certain features. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Account Security</h3>
                    <p>
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Age Requirements</h3>
                    <p>
                      You must be at least 18 years old to create an account. If you are between 13 and 18, you may only use Healthaven with the involvement and consent of a parent or legal guardian.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. User Conduct
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide false or misleading health information that could harm others</li>
                    <li>Use the service for any illegal purpose or in violation of any laws</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Attempt to gain unauthorized access to our systems or other user accounts</li>
                    <li>Upload viruses, malware, or any other malicious code</li>
                    <li>Scrape, copy, or use automated systems to access our content without permission</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. User Content
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">6.1 Your Content</h3>
                    <p>
                      You retain ownership of any content you submit to Healthaven, including health data, posts, comments, and feedback ("User Content"). By submitting User Content, you grant Healthaven a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of providing and improving our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">6.2 Content Standards</h3>
                    <p>
                      You are solely responsible for your User Content. You represent and warrant that your User Content does not violate these Terms or any applicable laws, and does not infringe upon the rights of any third party.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">6.3 Content Removal</h3>
                    <p>
                      We reserve the right to remove any User Content that violates these Terms or that we deem inappropriate without prior notice.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Health Information Accuracy
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    While we strive to provide accurate and up-to-date health information, Healthaven makes no warranties or representations regarding the accuracy, completeness, or reliability of any content on our platform. Health information changes rapidly, and what is current today may be outdated tomorrow.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Third-Party Services and Links
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    Healthaven may contain links to third-party websites or integrate with third-party services. We are not responsible for the content, privacy practices, or terms of service of any third-party sites or services. Your use of third-party services is at your own risk.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Intellectual Property
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    All content on Healthaven, including text, graphics, logos, images, software, and design elements, is the property of Healthaven or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute our content without our express written permission.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Privacy
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    Your use of Healthaven is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Disclaimers and Limitations of Liability
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">11.1 Service "As Is"</h3>
                    <p>
                      Healthaven is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">11.2 Limitation of Liability</h3>
                    <p>
                      To the maximum extent permitted by law, Healthaven and its affiliates, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">11.3 Maximum Liability</h3>
                    <p>
                      In no event shall Healthaven's total liability to you for all claims exceed the amount you paid to Healthaven in the twelve months preceding the claim, or one hundred dollars ($100), whichever is greater.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  12. Indemnification
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    You agree to indemnify, defend, and hold harmless Healthaven and its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to your use of our services, your User Content, or your violation of these Terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  13. Modifications to Services and Terms
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice. We may also update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our platform and updating the "Last Updated" date. Your continued use of Healthaven after such changes constitutes your acceptance of the updated Terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  14. Termination
                </h2>
                <div className="text-muted-foreground">
                  <p>
                    We may suspend or terminate your account and access to our services at any time, with or without cause or notice. Upon termination, your right to use Healthaven will immediately cease. Sections of these Terms that by their nature should survive termination will survive, including but not limited to ownership provisions, warranty disclaimers, and limitations of liability.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  15. Dispute Resolution
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">15.1 Governing Law</h3>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">15.2 Arbitration</h3>
                    <p>
                      Any dispute arising out of or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court, except that you may assert claims in small claims court if your claims qualify.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">15.3 Class Action Waiver</h3>
                    <p>
                      You agree that any arbitration or proceeding shall be limited to the dispute between you and Healthaven individually. To the full extent permitted by law, no arbitration or proceeding shall be joined with any other; No dispute shall be arbitrated on a class-action basis, and you waive any right to participate in a class-action lawsuit or class-wide arbitration.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  16. Miscellaneous
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">16.1 Entire Agreement</h3>
                    <p>
                      These Terms, together with our Privacy Policy, constitute the entire agreement between you and Healthaven regarding our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">16.2 Severability</h3>
                    <p>
                      If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">16.3 Assignment</h3>
                    <p>
                      You may not assign or transfer these Terms or your rights hereunder without our prior written consent. Healthaven may assign these Terms without restriction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">16.4 No Waiver</h3>
                    <p>
                      Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  17. Contact Information
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>If you have any questions about these Terms, please contact us at:</p>
                  <div className="pl-4">
                    <p className="font-semibold text-foreground">Healthaven</p>
                    <p>Email: legal@Healthaven.com</p>
                  </div>
                </div>
              </section>

              <div className="border-t border-border pt-6 mt-8">
                <p className="text-muted-foreground text-center italic">
                  By using Healthaven, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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

export default TermsOfService;