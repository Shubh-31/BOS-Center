import { CircleSmall } from "lucide-react";

export default function BNPLBankingSoftware() {
  return (
    <section className="py-12 bg-[radial-gradient(ellipse_200%_100%_at_bottom_right,#f9faff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        {/* h2 */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent pb-2">
            How Does Buy Now Pay Later Work?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-8">
          <p>
            BNPL systems operate through sophisticated technology stacks that
            enable real-time decision making and seamless user experiences. The
            process begins when a consumer selects BNPL as a payment option
            during checkout. Behind the scenes, multiple systems collaborate to
            assess creditworthiness, approve transactions, and establish payment
            schedules.
          </p>

          {/* Credit Assessment Process */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Credit Assessment Process
            </h3>
            <p>
              Modern BNPL platforms utilize alternative credit scoring
              methodologies that go beyond traditional credit reports. These
              systems analyze:
            </p>
            <ul className="space-y-2">
              <li>
                <h4>
                  <strong>Transactional Data:</strong>
                </h4>{" "}
                Purchase history, spending patterns, and payment behavior across
                multiple platforms provide insights into consumer financial
                habits.
              </li>
              <li>
                <h4>
                  {" "}
                  <strong>Digital Footprint Analysis:</strong>
                </h4>{" "}
                Social media activity, device information, and online behavior
                patterns contribute to risk assessment models.
              </li>
              <li>
                <h4>
                  <strong>Real-Time Verification:</strong>
                </h4>
                Income verification through bank account analysis, employment
                verification, and identity confirmation occur within seconds of
                application.
              </li>
              <li>
                <h4>
                  <strong>Machine Learning Models:</strong>
                </h4>
                Advanced algorithms continuously learn from transaction
                outcomes, refining risk assessment accuracy over time.
              </li>
            </ul>
          </div>

          {/* Payment Processing Workflow */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Payment Processing Workflow
            </h3>
            <p>BNPL transaction process typically follows this sequence:</p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                <h4 className="inline font-semibold text-gray-900">
                  Consumer Selection:
                </h4>{" "}
                Customer chooses BNPL option at checkout
              </li>
              <li>
                <h4 className="inline font-semibold text-gray-900">
                  Instant Assessment:
                </h4>{" "}
                Real-time creditworthiness evaluation using alternative data
                sources
              </li>
              <li>
                <h4 className="inline font-semibold text-gray-900">
                  Approval Decision:
                </h4>{" "}
                Automated approval or decline within seconds
              </li>
              <li>
                <h4 className="inline font-semibold text-gray-900">
                  Payment Collection:
                </h4>{" "}
                Initial payment (typically 25%) processed immediately
              </li>
              <li>
                <h4 className="inline font-semibold text-gray-900">
                  Installment Setup:
                </h4>{" "}
                Automated payment schedule established for remaining balance
              </li>
              <li>
                <h4 className="inline font-semibold text-gray-900">
                  Ongoing Management:
                </h4>{" "}
                Payment reminders, processing, and customer service
              </li>
            </ol>
          </div>

          {/* Risk Management Framework */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Risk Management Framework
            </h3>
            <p>
              Successful BNPL platforms implement comprehensive risk management
              strategies:
            </p>
            <ul className="space-y-2">
              <li>
                <h4>
                  <strong>Dynamic Pricing:</strong>
                </h4>
                Interest rates and fees adjust based on individual risk profiles
                and market conditions.
              </li>
              <li>
                <h4>
                  <strong>Merchant Risk Sharing:</strong>
                </h4>{" "}
                Partnerships with merchants often include risk-sharing
                arrangements to align incentives.
              </li>
              <li>
                <h4>
                  <strong>Collection Strategies:</strong>
                </h4>{" "}
                Automated payment processing with escalating collection
                procedures for delinquent accounts.
              </li>
              <li>
                <h4>
                  <strong>Fraud Prevention:</strong>
                </h4>{" "}
                Real-time fraud detection using machine learning and behavioral
                analysis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
