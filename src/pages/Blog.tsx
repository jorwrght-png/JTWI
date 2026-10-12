import { useState } from 'react';
import { PenTool, Wand2, Sparkles, Send, FileText } from 'lucide-react';

const AI_OPTIONS = [
  { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', desc: 'Best for long-form, highly detailed articles with deep reasoning.' },
  { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', desc: 'Fast, efficient generation for quick updates and design tips.' },
  { id: 'gpt-4o', name: 'GPT-4o', desc: 'Creative and conversational style, great for storytelling.' }
];

export default function Blog() {
  const [selectedModel, setSelectedModel] = useState(AI_OPTIONS[0].id);
  const [topic, setTopic] = useState('');
  const [generatedDraft, setGeneratedDraft] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if(!topic) return;
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedDraft(`**Draft: ${topic}**\n\nDesigning a luxury interior isn't just about expensive furniture; it's about creating a cohesive, deeply personal narrative within a space. \n\nWhen we approach a new project in Northeast Ohio, the first thing we look at is the flow of natural light. Light changes everything. It dictates the warmth of the color palette, the placement of reflective surfaces, and the overall mood of the room. \n\nFor a truly sophisticated minimalist look, we recommend starting with a clean off-white base—think warm ivory or soft ceramic tones—and layering in organic texture rather than loud patterns. Sage green accents, dark professional metal framing, and raw linen drapery add an incredible amount of visual depth without overwhelming the eye. \n\nRemember, true luxury is comfortable and intentional. It's the feeling of walking into a room and instantly exhaling. Contact us at Just the Wright Interiors if you need help bringing this vision to life in your own home.`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-[#fafbfa] min-h-screen pb-32">
      <section className="pt-32 pb-24 text-center container mx-auto px-4 bg-secondary border-b border-muted">
        <h1 className="text-7xl md:text-9xl font-cursive text-primary font-normal mb-8 lowercase tracking-tight">studio journal</h1>
        <p className="text-primary/70 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
           Manage your interior design blog posts and utilize state-of-the-art AI models to help craft captivating modern articles.
        </p>
      </section>

      <div className="container mx-auto px-4 max-w-6xl pt-24">
         <div className="bg-white p-10 md:p-14 shadow-xl border border-muted/50">
            <div className="flex items-center gap-4 mb-12 border-b border-muted pb-8">
              <Wand2 className="w-10 h-10 text-accent" />
              <h2 className="text-5xl font-cursive text-primary lowercase font-normal">ai writer studio</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-16">
               {/* Left Column: Controls */}
               <div className="flex-1 flex flex-col gap-10">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-4">1. Select AI Model</label>
                    <div className="flex flex-col gap-4">
                      {AI_OPTIONS.map(model => (
                        <div 
                          key={model.id}
                          onClick={() => setSelectedModel(model.id)}
                          className={`p-6 border cursor-pointer transition-all ${selectedModel === model.id ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-muted hover:border-accent/50 bg-[#fafbfa]'}`}
                        >
                          <h4 className="font-bold text-primary mb-2 flex items-center justify-between text-base">
                            {model.name}
                            {selectedModel === model.id && <Sparkles className="w-5 h-5 text-accent" />}
                          </h4>
                          <p className="text-sm text-muted-foreground font-medium leading-relaxed">{model.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                     <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-4">2. Article Topic or Prompt</label>
                     <textarea 
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                        placeholder="e.g. Write an essay about the importance of natural light combined with sage green..."
                        rows={5}
                        className="w-full border border-muted bg-[#fafbfa] p-5 focus:border-accent focus:outline-none transition-colors resize-none font-medium text-primary text-base leading-relaxed"
                     ></textarea>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !topic}
                    className="w-full py-5 bg-primary text-white uppercase tracking-widest text-sm font-bold hover:bg-accent transition-colors disabled:opacity-50 flex items-center justify-center gap-3 shadow-md"
                  >
                    {isGenerating ? 'Generating...' : <><PenTool className="w-5 h-5" /> Generate Draft</>}
                  </button>
               </div>

               {/* Right Column: Editor */}
               <div className="flex-[1.2] flex flex-col h-full min-h-[600px]">
                  <label className="block text-xs uppercase tracking-widest font-bold text-primary mb-4">Draft Editor</label>
                  <div className="flex-1 border border-muted p-8 bg-secondary relative shadow-inner">
                     {generatedDraft ? (
                        <textarea 
                          value={generatedDraft}
                          onChange={(e) => setGeneratedDraft(e.target.value)}
                          className="w-full h-full min-h-[500px] bg-transparent resize-none focus:outline-none text-primary leading-relaxed font-serif text-lg"
                        />
                     ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-primary/40 opacity-70 min-h-[500px] gap-6">
                           <FileText className="w-16 h-16" />
                           <p className="font-bold text-sm uppercase tracking-widest">Your generated draft will appear here.</p>
                        </div>
                     )}
                  </div>
                  {generatedDraft && (
                    <button className="w-full mt-6 py-5 bg-accent text-white uppercase tracking-widest text-sm font-bold hover:shadow-lg transition-all flex items-center justify-center gap-3">
                       <Send className="w-5 h-5" /> Publish Post
                    </button>
                  )}
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
