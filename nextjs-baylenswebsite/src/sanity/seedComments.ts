import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "cqsj8toq",
  dataset: "production",
  apiVersion: "2026-03-01",
  token: "", // Add your Sanity API write token here
  useCdn: false,
});

const commentsBySlug: Record<
  string,
  { author: string; message: string }[]
> = {
  "roy-g-guerrero-dgc": [
    {
      author: "Jake M.",
      message:
        "Really solid write-up. I played this course a couple weeks ago and had almost the exact same takeaway. Definitely one of those layouts that rewards control more than trying to throw hero shots all day.",
    },
    {
      author: "Sarah T.",
      message:
        "This was super helpful. I’ve been trying to decide whether this one was worth the drive and now I’m definitely adding it to my list.",
    },
    {
      author: "Ben R.",
      message:
        "“Play smart or get annoyed” is honestly the perfect description 😂 That was exactly how my round went.",
    },
    {
      author: "Tyler G.",
      message:
        "Love this style of review. It actually tells me what kind of golf the course rewards instead of just listing distances and saying “fun layout.”",
    },
    {
      author: "Emily K.",
      message:
        "This makes me want to go back and play it again. I definitely approached it too aggressively the first time and paid for it.",
    },
    {
      author: "Chris W.",
      message:
        "Totally agree on the replay value. This feels like one of those courses that gets better the more times you play it.",
    },
    {
      author: "Lauren D.",
      message:
        "Appreciate the honest review. It’s refreshing to read something that actually feels grounded instead of just overhyping every course.",
    },
    {
      author: "Evan S.",
      message:
        "This is exactly the kind of disc golf content I’ve been wanting to read. Looking forward to more reviews like this.",
    },
    {
      author: "Ryan",
      message: "Played this recently and yeah… sneaky tougher than it looks.",
    },
    {
      author: "Kelsey",
      message: "Super helpful before my round — thanks for putting this together.",
    },
  ],

  "the-hideaway-dgr-scorpion-e-r-i-c": [
    {
      author: "Mason L.",
      message:
        "I played this one on a windy day and it felt like a completely different course by the back nine. Curious if you had a similar experience.",
    },
    {
      author: "Drew P.",
      message:
        "This review nailed it. The layout is way more thoughtful than it first appears.",
    },
    {
      author: "Nina R.",
      message:
        "Appreciate the detail here. This is way more useful than trying to piece things together from random UDisc comments.",
    },
    {
      author: "Cole H.",
      message:
        "A couple of those holes absolutely punished me for trying to get too aggressive. Good reminder that not every line needs to be attacked.",
    },
    {
      author: "Abby W.",
      message:
        "Really enjoying the writing style on these. Feels like actual disc golf people writing for other actual disc golf people.",
    },
    {
      author: "Trevor B.",
      message:
        "This one definitely gets more fun the second time around once you know where not to land.",
    },
    {
      author: "Melissa J.",
      message:
        "I’ve been looking for more Texas course reviews like this. Please keep them coming.",
    },
    {
      author: "Noah P.",
      message:
        "Great breakdown. The risk/reward part of this course is exactly what kept me interested all round.",
    },
    {
      author: "Hannah",
      message: "Now I want to go throw this one again lol",
    },
    {
      author: "Blake",
      message: "This was actually really helpful before heading out there.",
    },
  ],

  "dino-hills-dg-farm-microraptor": [
    {
      author: "Jordan K.",
      message:
        "One of my favorite parts of this review is that it actually talks about how the course *plays*, not just whether it’s pretty.",
    },
    {
      author: "Tanner S.",
      message:
        "I’ve played this one a few times now and your description of the greens was spot on.",
    },
    {
      author: "Madison C.",
      message:
        "This is exactly the kind of thing I wish existed for every local course before I go try it.",
    },
    {
      author: "Owen G.",
      message:
        "Totally agree with the idea that this one rewards patience more than distance.",
    },
    {
      author: "Kayla B.",
      message:
        "Really clean write-up. Helpful without sounding robotic, which is rare these days.",
    },
    {
      author: "Eli V.",
      message:
        "I think this course humbled me more than I was emotionally prepared for, honestly.",
    },
    {
      author: "Chase D.",
      message:
        "This makes me want to revisit it with a different game plan and see how much cleaner I can score.",
    },
    {
      author: "Paige N.",
      message:
        "Love seeing thoughtful reviews like this instead of just “fun course, nice baskets.”",
    },
    {
      author: "Sam",
      message: "Yep, this all checks out based on my round there.",
    },
    {
      author: "Alyssa",
      message: "Great review. Definitely helped set expectations.",
    },
  ],

  "flying-armadillo-dgc": [
    {
      author: "Connor T.",
      message:
        "This one feels like a course where a couple small mistakes can snowball fast, and your review captured that really well.",
    },
    {
      author: "Faith M.",
      message:
        "Appreciate how honest this was. Makes me trust the review way more.",
    },
    {
      author: "Liam J.",
      message:
        "Played this last month and I think I’d enjoy it a lot more now after reading this and understanding the layout a bit better.",
    },
    {
      author: "Sydney R.",
      message:
        "This site is quickly becoming one of my favorite disc golf finds.",
    },
    {
      author: "Brandon F.",
      message:
        "You described the “one bad decision becomes two” feeling perfectly. That was my entire back nine.",
    },
    {
      author: "Rachel H.",
      message:
        "Love the tone here. Informative without sounding overly serious.",
    },
    {
      author: "Micah P.",
      message:
        "I’d be curious what discs you leaned on most during this round because it sounds like fairway control was everything.",
    },
    {
      author: "Zoe A.",
      message:
        "This is way more useful than just checking the star rating and hoping for the best.",
    },
    {
      author: "Dylan",
      message: "Solid review. Makes me want to go throw it this weekend.",
    },
    {
      author: "Erin",
      message: "Honestly one of the better course write-ups I’ve read in a while.",
    },
  ],

  "breckenridge-disc-golf-course": [
    {
      author: "Caleb W.",
      message:
        "Really appreciated the balance in this review. It gives the strengths without pretending the course is flawless.",
    },
    {
      author: "Morgan S.",
      message:
        "This was such a helpful read before heading out there. Wish I had found it sooner.",
    },
    {
      author: "Parker G.",
      message:
        "This course absolutely punished me for getting lazy with my landing zones, so your review felt painfully accurate.",
    },
    {
      author: "Jenna T.",
      message:
        "More course reviews like this please. This is such a good niche for disc golf content.",
    },
    {
      author: "Isaac L.",
      message:
        "One of the things I liked most here was that you actually described what kind of player would enjoy the course.",
    },
    {
      author: "Brooke N.",
      message:
        "This was a really enjoyable read even as someone who hasn’t played the course yet.",
    },
    {
      author: "Grant E.",
      message:
        "That note about not every birdie line being the right line hit a little too close to home.",
    },
    {
      author: "Tori M.",
      message:
        "I’m definitely bookmarking this site. Loving the tone and layout so far.",
    },
    {
      author: "Luke",
      message: "Played it once and this pretty much sums it up.",
    },
    {
      author: "Megan",
      message: "Helpful, honest, and easy to read. Big fan of this format.",
    },
  ],

  "the-hideaway-dgr-roadrunner": [
    {
      author: "Austin R.",
      message:
        "This review did a great job explaining why the course is fun without overselling it. That balance is hard to pull off.",
    },
    {
      author: "Hailey C.",
      message:
        "Super helpful breakdown. I’m still newer to the sport and this gave me a way better idea of what to expect.",
    },
    {
      author: "Garrett P.",
      message:
        "Totally agree with your take here. This is the kind of course where discipline saves strokes.",
    },
    {
      author: "Bella K.",
      message:
        "I’ve been really enjoying these reviews. They actually make me want to go explore more courses nearby.",
    },
    {
      author: "Nathan D.",
      message:
        "That line about the course making you rethink your decisions mid-round was very real 😂",
    },
    {
      author: "Caroline V.",
      message:
        "Really strong review. This feels like the kind of writing disc golf has needed for a while.",
    },
    {
      author: "Preston H.",
      message:
        "I’d love to see more local course reviews in this same format. This was super readable and useful.",
    },
    {
      author: "Olivia B.",
      message:
        "This is the first time I’ve landed on the site and I’m already into it. Great work.",
    },
    {
      author: "Ty",
      message: "Yep, I’d say this review was pretty dead on.",
    },
    {
      author: "Mia",
      message: "Adding this course to my list now. Appreciate the review.",
    },
  ],
};

async function seedComments() {
  for (const [slug, comments] of Object.entries(commentsBySlug)) {
    const post = await client.fetch(
      `*[_type == "BlogPost" && slug.current == $slug][0]{ _id, title }`,
      { slug }
    );

    if (!post?._id) {
      console.warn(`❌ No post found for slug: ${slug}`);
      continue;
    }

    console.log(`\n📝 Adding comments to: ${post.title}`);

    for (const comment of comments) {
      await client.create({
        _type: "comment",
        post: {
          _type: "reference",
          _ref: post._id,
        },
        author: comment.author,
        message: comment.message,
        submittedAt: new Date().toISOString(),
      });

      console.log(`   ✅ Added comment from ${comment.author}`);
    }
  }

  console.log("\n🎉 Done seeding comments!");
}

seedComments().catch((err) => {
  console.error(err);
  process.exit(1);
});