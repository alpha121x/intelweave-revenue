import { motion } from "framer-motion";
import { TrendingDown, Target, Zap } from "lucide-react";

const ReferralWarning = () => {
    return (
        <section className="relative py-24 bg-gradient-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto"
                >

                    {/* Section header */}
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Predictable Revenue Systems
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                            Why Referral-Dependent B2B Sales Pipelines Fail
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Build a Scalable Outbound Lead Generation Engine for Predictable Enterprise Growth
                        </p>
                    </div>

                    {/* Two-column grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

                        {/* Problem Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="
                                p-6 md:p-10 
                                bg-card 
                                border border-border 
                                rounded-xl 
                                flex flex-col 
                                h-full 
                                hover:border-primary/50 
                                hover:shadow-depth
                                transition-all 
                                duration-300
                            "
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                                    <TrendingDown className="w-6 h-6 text-steel" />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Why Referral Growth Fails
                                </h3>
                            </div>

                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-steel mt-1 text-lg">•</span>
                                    <span className="text-lg text-muted-foreground">Partners stop sending deals.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-steel mt-1 text-lg">•</span>
                                    <span className="text-lg text-muted-foreground">Word-of-mouth dries up.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-steel mt-1 text-lg">•</span>
                                    <span className="text-lg text-muted-foreground">SEO tanks or you enter a new market where nobody knows you.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-steel mt-1 text-lg">•</span>
                                    <span className="text-lg text-muted-foreground">Pipeline turns into a rollercoaster.</span>
                                </li>
                            </ul>

                            <div className="pt-6 border-t border-border mt-auto">
                                <p className="text-lg font-semibold text-foreground">
                                    Referrals built your past. Intelligent outbound sales automation secures your future.
                                </p>
                            </div>
                        </motion.div>

                        {/* Solution Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="
                                p-6 md:p-10 
                                bg-card 
                                border border-border 
                                rounded-xl 
                                flex flex-col 
                                h-full 
                                hover:border-primary/50 
                                hover:shadow-depth
                                transition-all 
                                duration-300
                            "
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    How We Create Controllable Pipeline
                                </h3>
                            </div>

                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-lg text-muted-foreground">Build their first <strong className="text-foreground">performing outbound engine</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-lg text-muted-foreground">Identify the industries and regions with the <strong className="text-foreground">highest win rates</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-lg text-muted-foreground"><strong className="text-foreground">Break into markets</strong> with zero brand presence.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-lg text-muted-foreground">Create a <strong className="text-foreground">controllable, scalable pipeline</strong> they fully own.</span>
                                </li>
                            </ul>

                            <div className="pt-6 border-t border-border mt-auto">
                                <p className="text-lg font-semibold text-primary">
                                    Transform unpredictable referrals into a controllable B2B lead generation system.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReferralWarning;
