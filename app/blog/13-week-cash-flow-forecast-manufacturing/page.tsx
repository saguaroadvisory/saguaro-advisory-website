import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "How to Build a 13-Week Cash Flow Forecast for a Manufacturing Business",
  description: "Lenders ask for them. Boards expect them. Most manufacturers don't have one — or have a spreadsheet that's already out of date. Here's how to build one that actually works.",
  alternates: { canonical: "https://www.saguaroadvisory.com/blog/13-week-cash-flow-forecast-manufacturing" },
  openGraph: {
    title: "How to Build a 13-Week Cash Flow Forecast for a Manufacturing Business",
    description: "Step-by-step guide for manufacturers who need cash visibility beyond the P&L.",
    url: "https://www.saguaroadvisory.com/blog/13-week-cash-flow-forecast-manufacturing",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      title="How to Build a 13-Week Cash Flow Forecast for a Manufacturing Business"
      date="August 2025"
      readTime="8 min read"
      category="Cash Flow"
    >
      <p>
        Lenders ask for them during credit reviews. Private equity firms expect them during diligence. And yet most manufacturing operators either don&rsquo;t have one, or are maintaining something in Excel that&rsquo;s already a week out of date.
      </p>
      <p>
        A 13-week cash flow forecast is the most actionable short-term financial tool a manufacturer can use. It doesn&rsquo;t predict the future — no forecast does. What it does is show you where your cash position is likely to go, week by week, based on what you know today. That visibility is the difference between reacting to a cash crunch and managing around one.
      </p>

      <h2>What it is (and what it isn&rsquo;t)</h2>
      <p>
        A 13-week cash flow forecast is a rolling, week-by-week projection of actual cash receipts and disbursements — not revenue and expenses. The distinction matters. Revenue recognized in your P&L doesn&rsquo;t equal cash until the customer pays. An expense accrued doesn&rsquo;t hit your bank account until the check clears.
      </p>
      <p>
        The forecast has two inputs: when cash is coming in, and when it&rsquo;s going out. Everything else is arithmetic.
      </p>

      <h2>Step 1: Build your collections model</h2>
      <p>
        The starting point is your accounts receivable aging. For each customer, project when invoices are likely to convert to cash based on their terms and actual payment history.
      </p>
      <p>
        If a customer is on Net 30 terms but consistently pays in 38 days, your forecast should reflect 38 days — not 30. Be honest here. Optimistic collection assumptions are the most common reason cash forecasts fail.
      </p>
      <p>Group your AR into buckets and apply historical collection rates:</p>
      <ul>
        <li>Current (0–30 days): project based on terms and payment history</li>
        <li>31–60 days past due: apply your actual historical collection rate for this bucket</li>
        <li>60+ days: be conservative — treat as uncertain until collected</li>
      </ul>
      <p>Add projected new invoices from your production pipeline for weeks 5–13.</p>

      <h2>Step 2: Map your disbursements</h2>
      <p>List every cash outflow, week by week:</p>
      <ul>
        <li><strong>Payroll</strong> — fixed, usually every one to two weeks</li>
        <li><strong>Supplier and vendor payments</strong> — use your AP aging schedule, not an average</li>
        <li><strong>Loan and lease payments</strong> — fixed, known in advance</li>
        <li><strong>Tax payments</strong> — quarterly estimated, annual true-ups</li>
        <li><strong>Capital expenditures</strong> — any planned equipment purchases</li>
        <li><strong>Insurance, rent, utilities</strong> — fixed monthly, map to the week they clear</li>
      </ul>
      <p>
        For variable disbursements, anchor to your AP aging the same way you did for AR. What&rsquo;s due when? Don&rsquo;t average across a month — model it by week.
      </p>

      <h2>Step 3: Calculate your weekly cash position</h2>
      <p>
        Starting cash balance + weekly receipts − weekly disbursements = ending balance. Do this for each of the 13 weeks. The ending balance from week 1 becomes the starting balance for week 2.
      </p>
      <p>
        Two numbers to watch: the low point in your 13-week window (your minimum cash position) and whether that number ever goes negative. If it does, you have a defined problem with a defined timeline — which is far better than discovering it when the payment bounces.
      </p>

      <h2>Step 4: Maintain it weekly</h2>
      <p>
        A 13-week forecast that&rsquo;s never updated is just a document. The value is in the weekly refresh — loading in what actually happened against what you projected, rolling the forecast forward by one week, and reviewing the variances.
      </p>
      <p>Most variances come from one of two places:</p>
      <ul>
        <li><strong>Collections</strong> — customers paying earlier or later than expected</li>
        <li><strong>Production changes</strong> — material costs shifting, orders added or lost</li>
      </ul>
      <p>
        Tracking variances is how the forecast gets more accurate over time. After a few months, you&rsquo;ll know which customers always pay late, which cost categories run over, and where your assumptions need to be tighter.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Using revenue booked instead of cash actually collected</li>
        <li>Building it once and not maintaining it</li>
        <li>Forgetting tax payments and annual insurance premiums</li>
        <li>Not capturing seasonal inventory builds as disbursements</li>
        <li>Failing to reconcile the forecast to actual bank balances weekly</li>
      </ul>

      <h2>When to bring in help</h2>
      <p>
        If you&rsquo;re building this for the first time, a fractional CFO can set up the model, calibrate assumptions based on your actual AR and AP history, and train your controller to maintain it. For most manufacturing businesses, a working 13-week forecast can be up and running within two to three weeks.
      </p>
      <p>
        If a lender is asking for one now and you don&rsquo;t have it, that&rsquo;s a more urgent situation — but still solvable quickly with the right help.
      </p>
    </ArticleLayout>
  );
}
