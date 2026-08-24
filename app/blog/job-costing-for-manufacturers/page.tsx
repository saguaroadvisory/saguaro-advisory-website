import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Job Costing for Manufacturers: How to See Your True Profitability",
  description: "Your P&L tells you whether the business made money. Job costing tells you where. Without it, you're pricing on instinct and may be subsidizing your least profitable work without knowing it.",
  alternates: { canonical: "https://www.saguaroadvisory.com/blog/job-costing-for-manufacturers" },
  openGraph: {
    title: "Job Costing for Manufacturers: How to See Your True Profitability",
    description: "How to set up job costing in manufacturing — and use it to sharpen pricing and margin.",
    url: "https://www.saguaroadvisory.com/blog/job-costing-for-manufacturers",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      title="Job Costing for Manufacturers: How to See Your True Profitability"
      date="August 2025"
      readTime="7 min read"
      category="Cost Accounting"
    >
      <p>
        A job you priced at 28% gross margin ends the month at 14%. A product line that&rsquo;s been running for three years looks profitable until someone calculates the overhead it&rsquo;s actually consuming. A customer that accounts for 30% of your revenue is, it turns out, your least profitable account.
      </p>
      <p>
        Without job costing or product-level margin analysis, your P&L tells you whether the business made money. It doesn&rsquo;t tell you where.
      </p>

      <h2>What job costing is</h2>
      <p>
        Job costing is the practice of tracking all costs — labor, materials, overhead — to a specific job, order, or project, so you can calculate the actual margin that work generated. It&rsquo;s the difference between knowing your company made 22% gross margin last quarter and knowing that Job #4471 made 31% while Job #4502 made 9%.
      </p>
      <p>
        The company average tells you the result. Job-level data tells you what drove it — and what to do differently.
      </p>

      <h2>When job costing applies</h2>
      <p>
        Job costing is most relevant when you&rsquo;re producing distinct units or batches that can be tracked individually: custom fabrication, contract manufacturing, job-shop machining, construction, specialty production runs. Each job is different enough that the costs are meaningfully different too.
      </p>
      <p>
        Process costing — averaging costs across a continuous production run — applies when products are homogeneous and production is continuous: commodity chemicals, some food manufacturing, bulk materials.
      </p>
      <p>
        Many manufacturers use elements of both. The key is matching your costing method to how you actually price and produce.
      </p>

      <h2>The three cost categories that matter</h2>

      <h3>Direct materials</h3>
      <p>
        What physically went into the job. This should flow from your bill of materials and your purchase orders. The question is whether you&rsquo;re capturing actual usage — including scrap and waste — or just theoretical usage. The gap between the two is usually where margin disappears. If you&rsquo;re consistently over on material costs, it shows up here before it shows up anywhere else.
      </p>

      <h3>Direct labor</h3>
      <p>
        Hours worked on the job times fully-burdened labor rate. The rate needs to include burden — not just base wages, but payroll taxes, benefits, and workers&rsquo; compensation. A $25/hour machinist typically costs closer to $34–$38 when fully burdened. Using base wages instead of fully-burdened rates is one of the most common reasons job margins look better on paper than they are in reality.
      </p>

      <h3>Overhead</h3>
      <p>
        This is where most job costing goes wrong. Rent, utilities, equipment depreciation, and indirect labor all need to be allocated to jobs — but the allocation method matters. Allocating on direct labor hours works for labor-intensive operations. Allocating on machine hours is more accurate when the shop floor is capital-intensive. Allocating overhead as a percentage of revenue distorts margins on high-revenue, low-complexity jobs.
      </p>
      <p>
        Whatever method you choose, apply it consistently and review the overhead rate at least annually.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Not capturing scrap, rework, and warranty costs as job costs</li>
        <li>Using standard labor rates instead of actual burdened rates</li>
        <li>Forgetting to allocate overhead at all — which inflates every job&rsquo;s apparent margin</li>
        <li>Not tracking purchase price variances when material costs change between quote and completion</li>
        <li>Closing jobs late — so the cost data doesn&rsquo;t inform the next estimate in time</li>
      </ul>

      <h2>Getting this into your system</h2>
      <p>
        The best job costing system is the one your team will actually use consistently. QuickBooks has job costing features that work for smaller operations. Sage 100 and Sage 300 have more robust manufacturing cost accounting. ERPs built for manufacturing — JobBOSS, Epicor, Infor — integrate job costing with production scheduling and work orders.
      </p>
      <p>
        Regardless of system, the discipline is the same: open jobs when work begins, close them when it&rsquo;s complete, and review variances monthly before the data gets stale.
      </p>

      <h2>What to do with the data</h2>
      <p>
        Job cost data is only valuable if you act on it. A monthly variance review is the minimum. Look at your bottom 20% of jobs by margin. Ask why they came in low. Estimating error? Scope creep? A raw material spike? An inefficient production run? Each answer improves your next quote.
      </p>
      <p>
        Over time, job cost data tells you which customers are actually profitable, which product lines are worth investing in, and where your pricing assumptions consistently break down. That&rsquo;s the kind of insight that compounds.
      </p>
    </ArticleLayout>
  );
}
