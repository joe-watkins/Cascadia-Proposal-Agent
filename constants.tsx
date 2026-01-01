import React from 'react';
import { StepData } from './types';
import { FolderTree, Users, FileText, Terminal, ShieldAlert, CheckCircle, Info, Sparkles, Key, PenTool, LayoutTemplate, Lock } from 'lucide-react';

const CopyButton = ({ text, label }: { text: string; label: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
    >
      {copied ? 'Copied!' : `Copy ${label}`}
    </button>
  );
};

export const STEPS: StepData[] = [
  {
    id: 0,
    title: "Welcome",
    shortTitle: "Start",
    description: "Understanding the purpose of the Proposal Agent.",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                This guide will help you set up the <strong>Cascadia Partners Proposal Agent</strong>.
                This is not an autonomous robot; it is a controlled workflow using Google Workspace and Gemini AI.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100 flex gap-4">
            <div className="flex-shrink-0 mt-1">
                <Sparkles className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
                <h4 className="font-semibold text-indigo-900 text-sm uppercase tracking-wide mb-1">How it works</h4>
                <p className="text-indigo-800 text-sm leading-relaxed">
                    The Proposal Agent uses <strong>AI grounded on good proposal examples</strong> in tandem with <strong>structured data from intake forms</strong> to craft initial drafts of proposals. This ensures high-quality output that matches our firm's tone.
                </p>
            </div>
        </div>
        
        <div className="space-y-4 text-gray-700 pt-2">
          <h3 className="font-semibold text-gray-900">Why are we setting this up?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>To reduce time spent drafting proposals.</li>
            <li>To improve consistency of tone and language.</li>
            <li>To surface assumptions and risks early.</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mt-6">Critical Requirement</h3>
          <p>
            This system relies on a <strong>Proposal Intake Form</strong>. You cannot just use free-form emails or chat messages. 
            Structured input is required to prevent AI errors and hallucinations.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "Approved Tool Stack",
    shortTitle: "Tools",
    description: "Ensure you have access to the following Google Workspace tools.",
    content: (
      <div className="space-y-6">
        <p className="text-gray-600">The Proposal Agent operates entirely within the Google ecosystem. No external AI tools may be used.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Google Drive",
            "Google Docs",
            "Google Forms (Intake)",
            "Gemini for Google Workspace",
            "Google Groups"
          ].map((tool, idx) => (
            <div key={idx} className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="font-medium text-gray-900">{tool}</span>
            </div>
          ))}
        </div>
        
        <div className="text-sm text-gray-500 italic mt-4">
          Note: Ensure your Google Workspace edition supports Gemini features.
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Folder Structure Setup",
    shortTitle: "Folders",
    description: "Create the required directory structure in Google Drive.",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FolderTree className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Action: Create Directories</h3>
            <p className="text-sm text-gray-500 mb-4">Go to Google Drive and create the following folder hierarchy exactly as shown.</p>
          </div>
        </div>

        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm shadow-inner overflow-x-auto">
          <div className="mb-2">/AI_Agents/Proposal_Agent/</div>
          <div className="pl-4 text-gray-400">│</div>
          <div className="pl-4">├── <span className="text-yellow-300">Source_Materials</span> <span className="text-gray-500 text-xs ml-2">(Read-only: Templates, Legal, Past Proposals)</span></div>
          <div className="pl-4">├── <span className="text-green-300">Intake_Responses</span> <span className="text-gray-500 text-xs ml-2">(Where Google Form results go)</span></div>
          <div className="pl-4">├── <span className="text-blue-300">Drafts</span> <span className="text-gray-500 text-xs ml-2">(AI Work-in-progress)</span></div>
          <div className="pl-4">└── <span className="text-purple-300">Final</span> <span className="text-gray-500 text-xs ml-2">(Approved proposals)</span></div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Only "Proposal Agent Owners" should have edit access to the <em>Source_Materials</em> folder.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Access Control",
    shortTitle: "Access",
    description: "Set up Google Groups for permissions management.",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Users className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Action: Create Google Groups</h3>
            <p className="text-sm text-gray-500 mb-4">Create these two groups in your Google Workspace Admin console.</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-gray-800">proposal-agent-users@</h4>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">General Access</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Add staff who need to submit intake forms and generate drafts.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-gray-800">proposal-agent-owners@</h4>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Admin Access</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Add managers (like Rebecca) who manage governance and edit source materials.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mt-4">
            <div className="flex items-start gap-3">
                <Key className="h-5 w-5 text-gray-500 mt-0.5" />
                <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Why do we need these groups?</h4>
                    <p className="text-sm text-gray-600 mb-2">
                        These groups act as <strong>permission keys</strong>. Instead of sharing the folders from Step 3 with individual people, you will share them with these group email addresses.
                    </p>
                    <p className="text-sm text-gray-600">
                        This ensures that when someone leaves the company or changes roles, you simply update the group membership, and their folder access updates automatically.
                    </p>
                </div>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Proposal Intake Form",
    shortTitle: "Intake",
    description: "Build the mandatory Google Form.",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <FileText className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Action: Create Google Form</h3>
            <p className="text-sm text-gray-500 mb-4">
              Create a new Google Form. Set the destination for responses to the <code>/Intake_Responses</code> folder you created in Step 3.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-medium text-gray-700">
            Required Fields (Add these exactly)
          </div>
          <ul className="divide-y divide-gray-200 text-sm text-gray-700">
            <li className="px-4 py-3">Client name <span className="text-red-500">*</span></li>
            <li className="px-4 py-3">Project type (Use a dropdown) <span className="text-red-500">*</span></li>
            <li className="px-4 py-3">Jurisdiction <span className="text-red-500">*</span></li>
            <li className="px-4 py-3">Known scope elements <span className="text-red-500">*</span></li>
            <li className="px-4 py-3">Explicit exclusions <span className="text-red-500">*</span></li>
            <li className="px-4 py-3">Timeline constraints <span className="text-red-500">*</span></li>
            <li className="px-4 py-3">Budget signal <span className="text-gray-400">(Optional)</span></li>
            <li className="px-4 py-3">Notes or uncertainties <span className="text-red-500">*</span></li>
          </ul>
        </div>
        
        <p className="text-sm text-red-600 italic">
          Warning: Proposals initiated without this form will not receive AI support.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "The Prompt Instruction",
    shortTitle: "Prompt",
    description: "The core instruction set for Gemini.",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Terminal className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Action: Save Instruction</h3>
            <p className="text-sm text-gray-500 mb-4">
              When drafting in Google Docs with Gemini, users <strong>must</strong> use the following prompt verbatim. 
              Save this in a text file in your <code>Source_Materials</code> folder for easy copying.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-4 relative group">
          <pre className="text-sm text-gray-100 whitespace-pre-wrap font-mono">
{`You are the Proposal Drafting Agent for Cascadia Partners.
Use only documents in the Proposal_Agent/Source_Materials folder.
Use the Proposal Intake Form responses as the primary source of structured input.
Match tone and structure from prior approved proposals.
Explicitly list assumptions and risks.
Do not invent pricing, schedules, legal language, or client commitments.
Insert clear placeholders when intake information is incomplete.`}
          </pre>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
             <CopyButton 
               text={`You are the Proposal Drafting Agent for Cascadia Partners.
Use only documents in the Proposal_Agent/Source_Materials folder.
Use the Proposal Intake Form responses as the primary source of structured input.
Match tone and structure from prior approved proposals.
Explicitly list assumptions and risks.
Do not invent pricing, schedules, legal language, or client commitments.
Insert clear placeholders when intake information is incomplete.`} 
               label="Prompt" 
             />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Build Master Template",
    shortTitle: "Template",
    description: "Create the standardized source document for the AI.",
    content: (
      <div className="space-y-8 pb-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <LayoutTemplate className="h-5 w-5 text-yellow-600 mr-2" />
            <div>
              <h3 className="font-bold text-yellow-800 text-sm uppercase">Crucial Phase</h3>
              <p className="text-sm text-yellow-700">The "Master Template" is the skeleton the AI fills with flesh. Bad templates = Bad AI output.</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <section>
             <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white font-bold rounded px-2 py-1 text-xs">STEP 1</div>
                <h4 className="font-bold text-gray-900">Curate the Source Set (Hard Gate)</h4>
             </div>
             <div className="pl-3 border-l-2 border-gray-200 ml-3">
               <p className="text-sm text-gray-600 mb-3">Select 8–15 high-quality, representative proposals from <code>/Source_Materials</code>.</p>
               <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 marker:text-red-500">
                  <li className="leading-snug">No outliers.</li>
                  <li className="leading-snug">No one-off experimental scopes.</li>
                  <li className="leading-snug">No outdated language.</li>
               </ul>
             </div>
          </section>

          {/* Step 2 & 3 */}
          <section>
             <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white font-bold rounded px-2 py-1 text-xs">STEP 2 & 3</div>
                <h4 className="font-bold text-gray-900">Extract DNA & Normalize</h4>
             </div>
             <div className="pl-3 border-l-2 border-gray-200 ml-3">
               <p className="text-sm text-gray-600 mb-3">Identify the sections that appear every time. Create a normalized outline.</p>
               <div className="bg-gray-100 p-4 rounded text-xs font-mono text-gray-700 flex flex-wrap gap-2">
                 <span>Project Understanding •</span>
                 <span>Scope •</span>
                 <span>Exclusions •</span>
                 <span>Assumptions •</span>
                 <span>Schedule •</span>
                 <span>Fee Structure •</span>
                 <span>Team •</span>
                 <span>Risks •</span>
                 <span>Closing</span>
               </div>
             </div>
          </section>

          {/* Step 4 */}
          <section>
             <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white font-bold rounded px-2 py-1 text-xs">STEP 4</div>
                <h4 className="font-bold text-gray-900">Map Intake Fields (Critical)</h4>
             </div>
             <div className="pl-3 border-l-2 border-gray-200 ml-3">
               <p className="text-sm text-gray-600 mb-3">Every intake field must have a destination in the document.</p>
               <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                 <table className="min-w-full text-sm">
                   <thead className="bg-gray-50">
                     <tr>
                       <th className="px-4 py-2 text-left font-medium text-gray-500">Intake Field</th>
                       <th className="px-4 py-2 text-left font-medium text-gray-500">Proposal Section</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-200 bg-white">
                     <tr><td className="px-4 py-2">Project Type</td><td className="px-4 py-2">Project Understanding</td></tr>
                     <tr><td className="px-4 py-2">Jurisdiction</td><td className="px-4 py-2">Scope / Risks</td></tr>
                     <tr><td className="px-4 py-2">Known Scope</td><td className="px-4 py-2">Scope of Services</td></tr>
                     <tr><td className="px-4 py-2">Timeline</td><td className="px-4 py-2">Schedule</td></tr>
                   </tbody>
                 </table>
               </div>
             </div>
          </section>

          {/* Step 5 */}
          <section>
             <div className="flex items-center gap-3 mb-3">
                <div className="bg-indigo-600 text-white font-bold rounded px-2 py-1 text-xs">STEP 5</div>
                <h4 className="font-bold text-indigo-700">Build the Artifact</h4>
             </div>
             <div className="pl-3 border-l-2 border-indigo-200 ml-3 space-y-4">
               <p className="text-sm text-gray-600">
                  Create a Google Doc titled <strong>"Proposal Master Template – AI Drafting"</strong>. 
                  Below is an example of what one page of this template should look like. 
                  Notice the <strong>Hidden Instructions</strong> and <strong>Placeholders</strong>.
               </p>
               
               {/* Document Visualizer */}
               <div className="bg-white border border-gray-300 shadow-md rounded-sm overflow-hidden">
                 {/* Toolbar simulation */}
                 <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
                   <FileText className="w-4 h-4 text-blue-600" />
                   <span className="text-xs font-medium text-gray-600 truncate">Proposal Master Template – AI Drafting.gdoc</span>
                 </div>
                 
                 {/* Content */}
                 <div className="p-6 md:p-8 space-y-8 font-serif">
                   
                   {/* Header */}
                   <div className="text-center border-b-2 border-gray-800 pb-4 mb-8">
                      <h1 className="font-sans font-bold text-xl uppercase tracking-widest text-gray-900">Proposal for Services</h1>
                   </div>

                   {/* Section 1 */}
                   <div className="relative group">
                     {/* Comment Bubble */}
                     <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mb-2 text-xs text-yellow-800 font-sans font-medium flex gap-2 w-full md:w-auto">
                        <span className="uppercase text-[10px] font-bold tracking-wider text-yellow-600 mt-0.5 flex-shrink-0">Instruction</span>
                        <span>"AI: Draft using intake fields [Project Type] and [Client Name]. Match tone of 2024 Urban Planning proposals."</span>
                     </div>

                     <h2 className="font-sans font-bold text-lg text-gray-900 mb-2 uppercase">1. Project Understanding</h2>
                     <p className="text-sm text-gray-800 leading-relaxed">
                       Cascadia Partners is pleased to submit this proposal to <span className="bg-blue-100 text-blue-800 px-1 rounded font-mono text-xs">[CLIENT_NAME]</span> for the <span className="bg-blue-100 text-blue-800 px-1 rounded font-mono text-xs">[PROJECT_TYPE]</span> project. We understand that the project aims to...
                     </p>
                   </div>

                   {/* Section 2 */}
                   <div className="relative group">
                     {/* Comment Bubble */}
                     <div className="bg-yellow-50 border border-yellow-200 rounded p-2 mb-2 text-xs text-yellow-800 font-sans font-medium flex gap-2 w-full md:w-auto">
                        <span className="uppercase text-[10px] font-bold tracking-wider text-yellow-600 mt-0.5 flex-shrink-0">Instruction</span>
                        <span>"AI: Expand [Known Scope] into standard deliverables. Explicitly list exclusions."</span>
                     </div>

                     <h2 className="font-sans font-bold text-lg text-gray-900 mb-2 uppercase">2. Scope of Services</h2>
                     <p className="text-sm text-gray-800 leading-relaxed mb-2">
                       We propose the following scope phases:
                     </p>
                     <ul className="list-disc pl-5 text-sm text-gray-800">
                       <li>Phase 1: Discovery & Analysis</li>
                       <li>Phase 2: Drafting within <span className="bg-blue-100 text-blue-800 px-1 rounded font-mono text-xs">[JURISDICTION]</span> regulations.</li>
                     </ul>
                   </div>

                 </div>
               </div>
             </div>
          </section>

          {/* Step 6 & 7 */}
          <section>
             <div className="flex items-center gap-3 mb-3">
                <div className="bg-gray-900 text-white font-bold rounded px-2 py-1 text-xs">STEP 6 & 7</div>
                <h4 className="font-bold text-gray-900">Validate & Lock</h4>
             </div>
             <div className="pl-3 border-l-2 border-gray-200 ml-3 text-sm text-gray-600">
               <p>Run 3 real proposals through it. Fix the template, not the AI. Once validated, mark as <strong>Read-Only</strong>.</p>
             </div>
          </section>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Workflow & Review Gates",
    shortTitle: "Workflow",
    description: "The mandatory human review process.",
    content: (
      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">The 4-Step Drafting Routine</h3>
          </div>
          
          <div className="p-6 space-y-6">
            {/* 1. Intake */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">Review Intake Data</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Open the <code>/Intake_Responses</code> folder. Open the latest Google Form response to see the client requirements.
                </p>
              </div>
            </div>

            {/* 2. Template */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Prepare Draft File</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Go to <code>/Source_Materials</code>. Right-click your static <strong>"Master Proposal Template"</strong> (created in Step 6) and select "Make a copy".
                  <br/><br/>
                  Move this copy to the <code>/Drafts</code> folder and rename it (e.g., "Acme_Proposal_Draft").
                </p>
              </div>
            </div>

            {/* 3. Gemini */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Run the Agent</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Open the new draft doc. Click the <strong>Gemini (sparkle) icon</strong> in the top right.
                  <br/><br/>
                  <strong>Paste two things into the chat box:</strong>
                </p>
                  <ol className="list-decimal pl-4 mt-2 space-y-1 text-sm text-gray-500">
                     <li>The <strong>Mandatory Prompt</strong> (from Step 5).</li>
                     <li>The text content from the <strong>Intake Form</strong> response.</li>
                  </ol>
              </div>
            </div>

             {/* 4. Review */}
             <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-gray-900">Human Review</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Review the output. Verify Gemini didn't hallucinate dates or fees. Submit for approvals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
           <div className="flex items-center mb-4">
             <ShieldAlert className="h-5 w-5 text-orange-600 mr-2" />
             <h3 className="font-bold text-orange-800">Mandatory Review Gates</h3>
           </div>
           <div className="space-y-3">
             <div className="flex items-center">
               <span className="h-6 w-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold mr-3">1</span>
               <span className="text-orange-900"><strong>Project Manager:</strong> Scope accuracy & assumptions.</span>
             </div>
             <div className="flex items-center">
               <span className="h-6 w-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold mr-3">2</span>
               <span className="text-orange-900"><strong>Operations:</strong> Fees, staffing, timelines.</span>
             </div>
             <div className="flex items-center">
               <span className="h-6 w-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold mr-3">3</span>
               <span className="text-orange-900"><strong>Principal:</strong> Final approval.</span>
             </div>
           </div>
        </div>

        <p className="text-center font-bold text-red-600">
          AI-generated drafts must NEVER be sent to clients without these approvals.
        </p>
      </div>
    )
  },
  {
    id: 8,
    title: "Setup Complete",
    shortTitle: "Finish",
    description: "You have configured the Proposal Agent structure.",
    content: (
      <div className="text-center space-y-6 py-8">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Configuration Complete</h2>
          <p className="text-gray-600 mt-2">
            The folder structure, access groups, intake forms, and master templates are defined.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg text-left max-w-md mx-auto">
          <h4 className="font-semibold text-gray-900 mb-2">Governance Reminder</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Intake form fields reviewed annually.</li>
            <li>• Source materials reviewed quarterly.</li>
            <li>• System Owner: Rebecca (HR/Ops).</li>
          </ul>
        </div>
      </div>
    )
  }
];