export default function TeachingPage() {
  return (
    <main className="min-h-screen p-8 text-gray-800 bg-white">
      <h1 className="text-4xl font-bold mb-6">Teaching</h1>

      <p className="text-lg max-w-3xl leading-relaxed mb-8">
        As a <strong>Technical Assistant</strong> at <strong>BPIE</strong>, I take pride in delivering both <strong>theory</strong> and <strong>practical</strong> classes for Computer Science and related subjects.
        <br /><br />
        My teaching focuses on clear explanations, step-by-step problem solving, and real-world application. I ensure students understand the logic behind each concept and feel confident to implement what they have learned.
        <br /><br />
        I regularly guide students through lab sessions, coding exercises, and project-building activities to strengthen their practical knowledge alongside classroom learning.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What Students Say</h2>

      <div className="grid gap-6 max-w-3xl">
        <blockquote className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded-md shadow">
          <p className="italic">“Sir explains everything so simply that even the hardest topic becomes easy to understand.”</p>
          <footer className="mt-2 text-right text-sm text-gray-600">— A CSE 3rd year student</footer>
        </blockquote>

        <blockquote className="p-4 border-l-4 border-green-600 bg-gray-50 rounded-md shadow">
          <p className="italic">“His practical classes are hands-on and make us confident to code on our own.”</p>
          <footer className="mt-2 text-right text-sm text-gray-600">— A Diploma student at BPIE</footer>
        </blockquote>

        <blockquote className="p-4 border-l-4 border-purple-600 bg-gray-50 rounded-md shadow">
          
        <p className="italic">“One of the most patient and supportive teachers I have had — always ready to help.”</p>
          <footer className="mt-2 text-right text-sm text-gray-600">— Feedback from workshop attendee</footer>
        </blockquote>
      </div>
    </main>
  );
}
