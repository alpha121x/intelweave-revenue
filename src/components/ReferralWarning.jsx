import { motion } from "framer-motion";
import { TrendingDown, Target, Zap } from "lucide-react";

const ReferralWarning = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 p-8 md:p-12 bg-secondary/50 border border-primary/20 rounded-xl max-w-4xl mx-auto shadow-2xl"
        >
            <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-foreground mb-3 leading-tight">
                    🛑 You're One Slow Month Away From Panic
                </h3>
                <p className="text-lg text-steel font-medium">
                    If You Rely Only on Referrals or Inbound, Your Pipeline is a Rollercoaster.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-border/50">
                {/* Problem Side */}
                <div>
                    <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5" /> Why Referral Growth Fails
                    </h4>
                    <ul className="space-y-3 text-steel">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> Partners stop sending deals.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> Word-of-mouth dries up.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> SEO tanks or you enter a new market where nobody knows you.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> Pipeline turns into a rollercoaster.
                        </li>
                    </ul>
                    <p className="mt-6 text-lg font-bold text-foreground">
                        Referrals built your past. Intelligent GTM outbound secures your future.
                    </p>
                </div>

                {/* Solution Side */}
                <div>
                    <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5" /> How We Create Controllable Pipeline
                    </h4>
                    <ul className="space-y-3 text-foreground">
                        <li className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-primary mt-1" /> Build their first **performing outbound engine**.
                        </li>
                        <li className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-primary mt-1" /> Identify the industries and regions with the **highest win rates**.
                        </li>
                        <li className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-primary mt-1" /> **Break into markets** with zero brand presence.
                        </li>
                        <li className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-primary mt-1" /> Create a **controllable, scalable pipeline** they fully own.
                        </li>
                    </ul>
                    <p className="mt-6 text-lg font-bold text-primary">
                        Don’t leave growth to chance and hope. Take control with intelligent outbound.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ReferralWarning;