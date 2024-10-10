import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, BriefcaseIcon, FileUp, GraduationCap, LineChart, Lightbulb, Rocket, Youtube } from "lucide-react"

export default function ResumeAnalysisResults() {
  return (
    <section className="w-full my-5 flex flex-col">
      <div className="container px-4 md:px-6 flex flex-col">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Resume Analysis Results</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">ATS Score</CardTitle>
              <LineChart className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="text-5xl font-bold">68%</div>
                <Progress value={68} className="w-2/3" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Your resume needs improvement to be more ATS-friendly.</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Why your score is low:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Lack of relevant keywords for the job description</li>
                  <li>Complex formatting that may confuse ATS systems</li>
                  <li>Inconsistent use of bullet points and section headers</li>
                  <li>Missing or incomplete contact information</li>
                  <li>Overuse of graphics or non-standard fonts</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Project Improvements</CardTitle>
              <Rocket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Add quantifiable results to Project X</li>
                <li>Highlight leadership role in Project Y</li>
                <li>Include technologies used in Project Z</li>
                <li>Elaborate on problem-solving in Project A</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skills Gap Analysis</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm">Consider adding or improving these skills:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge>Docker</Badge>
                <Badge>Kubernetes</Badge>
                <Badge>GraphQL</Badge>
                <Badge>React Native</Badge>
                <Badge>AWS</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Experience Highlights</CardTitle>
              <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Strong leadership experience</li>
                <li>Diverse project portfolio</li>
                <li>Consistent career progression</li>
                <li>Cross-functional team collaboration</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Education Recommendations</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Add relevant coursework to your degree</li>
                <li>Highlight academic achievements</li>
                <li>Include any certifications or workshops</li>
                <li>Mention any research or thesis projects</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Improvements</CardTitle>
              <Lightbulb className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Use more action verbs</li>
                <li>Tailor resume to job descriptions</li>
                <li>Improve formatting for better readability</li>
                <li>Add a strong professional summary</li>
                <li>Ensure consistent tense usage</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Resume Improvement Resources</h3>
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 my-4">
              <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
              <TabsTrigger value="guides">Guides & Articles</TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted flex items-center justify-center mb-2">
                        <Youtube className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h4 className="font-semibold text-sm">Resume Writing Tips #{index}</h4>
                      <p className="text-xs text-muted-foreground mt-1">Learn how to improve your resume</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="guides">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>ATS-Friendly Resume Guide</CardTitle>
                    <CardDescription>Learn how to optimize your resume for ATS</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Read Guide</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Effective Project Descriptions</CardTitle>
                    <CardDescription>Showcase your projects in the best light</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Read Guide</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Section Mastery</CardTitle>
                    <CardDescription>Highlight your skills effectively</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Read Guide</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Resume Formatting Best Practices</CardTitle>
                    <CardDescription>Make your resume visually appealing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Read Guide</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tailoring Your Resume</CardTitle>
                    <CardDescription>Customize your resume for each job application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Read Guide</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Cover Letter Writing Tips</CardTitle>
                    <CardDescription>Complement your resume with a strong cover letter</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Read Guide</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}