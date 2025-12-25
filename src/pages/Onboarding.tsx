import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const onboardingScreens = [
  {
    heading: "Health Coverage for Your Stay in Nigeria",
    subheading:
      "Healthaven provides short-term health insurance designed for diaspora visitors, giving you reliable medical coverage while you are in Nigeria.",
  },
  {
    heading: "Access Quality Care with Confidence",
    subheading:
      "Get access to trusted hospitals and healthcare providers across Nigeria, ensuring you receive timely and dependable medical care when it matters most.",
  },
  {
    heading: "Simple, Secure, and Worry-Free",
    subheading:
      "From quick enrollment to clear coverage, Healthaven makes health insurance straightforward—so you can focus on your visit, not medical concerns.",
  },
];

const Onboarding = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentScreen < onboardingScreens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      setShowLogin(true);
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleSkip = () => {
    setShowLogin(true);
  };

  const handleSocialLogin = (provider: string) => {
    // Placeholder for social login integration
    console.log(`Login with ${provider}`);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!showLogin ? (
          <motion.div
            key={`onboarding-${currentScreen}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl lg:max-w-3xl"
          >
            <div className="relative border border-border rounded-lg bg-card p-8 md:p-14 lg:p-20">
              <button
                onClick={handleSkip}
                className="absolute top-6 right-6 lg:top-8 lg:right-8 text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                Skip
              </button>

              <div className="text-center space-y-6 lg:space-y-8 mt-6 lg:mt-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                  {onboardingScreens[currentScreen].heading}
                </h1>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg max-w-xl mx-auto">
                  {onboardingScreens[currentScreen].subheading}
                </p>
              </div>

              <div className="mt-12 lg:mt-16 flex justify-center gap-4">
                {currentScreen > 0 && (
                  <Button variant="outline" onClick={handleBack} className="px-10 lg:px-12">
                    Back
                  </Button>
                )}
                <Button variant="outline" onClick={handleNext} className="px-10 lg:px-12">
                  Next
                </Button>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-10 lg:mt-12">
                {onboardingScreens.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-colors ${
                      index === currentScreen ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl lg:max-w-3xl"
          >
            <div className="border border-border rounded-lg bg-card p-8 md:p-14 lg:p-20">
              <div className="text-center space-y-4 lg:space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                  Login
                </h1>
                <p className="text-muted-foreground text-base lg:text-lg max-w-md mx-auto">
                  Use any of the social media below to sync your information across multiple devices
                </p>
              </div>

              <div className="mt-10 lg:mt-14 space-y-4 lg:space-y-5 max-w-sm mx-auto">
                <Button
                  variant="outline"
                  className="w-full h-11 lg:h-12 text-base"
                  onClick={() => handleSocialLogin("Google")}
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-11 lg:h-12 text-base"
                  onClick={() => handleSocialLogin("Facebook")}
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-11 lg:h-12 text-base"
                  onClick={() => handleSocialLogin("Twitter")}
                >
                  Twitter/X
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
