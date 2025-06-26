
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Clock, ChevronRight } from "lucide-react";

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", count: 24 },
    { id: "services", name: "Digital Services", count: 8 },
    { id: "creative", name: "Creative & Design", count: 7 },
    { id: "ventures", name: "Innovation", count: 5 },
    { id: "guides", name: "How-to Guides", count: 4 }
  ];

  const articles = [
    {
      id: 1,
      title: "Complete Guide to Microsoft 365 Setup for Small Businesses",
      excerpt: "Step-by-step walkthrough of setting up Microsoft 365, including security best practices and cost optimization strategies.",
      category: "services",
      readTime: "12 min",
      tags: ["Microsoft 365", "Security", "Setup"],
      featured: true
    },
    {
      id: 2,
      title: "Why Your Business Needs GDPR-Compliant Hosting",
      excerpt: "Understanding GDPR requirements and how managed hosting in the EU can protect your business and customer data.",
      category: "services",
      readTime: "8 min",
      tags: ["GDPR", "Hosting", "Compliance"]
    },
    {
      id: 3,
      title: "Building a Brand That Resonates: Our 5-Step Process",
      excerpt: "Learn how we develop compelling brand identities that connect with audiences and drive business growth.",
      category: "creative",
      readTime: "10 min",
      tags: ["Branding", "Design", "Strategy"],
      featured: true
    },
    {
      id: 4,
      title: "Power Automate vs Zapier: Which Automation Tool is Right for You?",
      excerpt: "Comprehensive comparison of popular automation platforms, including cost analysis and use case recommendations.",
      category: "services",
      readTime: "15 min",
      tags: ["Automation", "Power Automate", "Zapier"]
    },
    {
      id: 5,
      title: "The Future of Content Management: Ghost vs Traditional CMS",
      excerpt: "Why we choose Ghost for modern content publishing and how it compares to WordPress and other CMS options.",
      category: "creative",
      readTime: "9 min",
      tags: ["Ghost", "CMS", "Content Strategy"]
    },
    {
      id: 6,
      title: "AI Integration in Business: Practical Applications and ROI",
      excerpt: "Real-world examples of AI implementation in small to medium businesses and measurable impact on operations.",
      category: "ventures",
      readTime: "13 min",
      tags: ["AI", "Innovation", "ROI"],
      featured: true
    },
    {
      id: 7,
      title: "Remote Team Collaboration: Tools and Best Practices",
      excerpt: "Essential tools and workflows for distributed teams, including security considerations and productivity tips.",
      category: "guides",
      readTime: "11 min",
      tags: ["Remote Work", "Collaboration", "Productivity"]
    },
    {
      id: 8,
      title: "Cost-Effective Open Source Alternatives to Popular SaaS Tools",
      excerpt: "Detailed comparison of open source tools that can replace expensive SaaS subscriptions without losing functionality.",
      category: "services",
      readTime: "14 min",
      tags: ["Open Source", "Cost Reduction", "SaaS Alternatives"]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Knowledge Base</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Insights, guides, and best practices for digital transformation and business growth
        </p>
      </div>

      {/* Search Bar */}
      <Card className="bg-gray-900/50 border-gray-800">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, guides, and resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Featured Articles */}
      {searchTerm === "" && selectedCategory === "all" && (
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-400 uppercase tracking-wide">Featured</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                    Read More <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Categories and Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Articles List */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Card key={article.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <BookOpen className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-xs text-gray-400 uppercase tracking-wide">
                            {categories.find(cat => cat.id === article.category)?.name}
                          </span>
                          <div className="flex items-center text-gray-400 text-sm ml-4">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300">
                      Read Full Article <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No articles found</h3>
                  <p className="text-gray-400">Try adjusting your search terms or browse different categories.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
