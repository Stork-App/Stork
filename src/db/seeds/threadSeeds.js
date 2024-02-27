const Thread = require('../models/thread');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('threads').del()

  await Thread.create(2, 1, 'Absolutely avoid raw sushi and limit caffeine intake. Consider more fruits and veggies.');
  await Thread.create(3, 1, 'Definitely steer clear of raw fish and high-mercury seafood. Also, limit caffeine intake.');
  await Thread.create(4, 1, 'Remember to wash fruits and vegetables thoroughly to avoid any risk of toxoplasmosis.');
  await Thread.create(5, 1, 'Processed foods and sugary snacks should be eaten in moderation. Focus on whole foods.');

  await Thread.create(3, 2, 'Weight gain varies, but a healthy range is typically 25-35 pounds. Always consult your doctor.');
  await Thread.create(5, 2, 'It depends on your pre-pregnancy weight. Generally, 25-35 pounds is considered healthy.');
  await Thread.create(4, 2, 'Discuss your weight gain goals with your healthcare provider to ensure youre on track.');
  await Thread.create(1, 2, 'Remember, its not just about weight. Nutrition and health are most important.');

  await Thread.create(6, 3, 'Low-impact exercises like walking and swimming are great. Avoid heavy lifting.');
  await Thread.create(2, 3, 'Yes, but stick to low-impact exercises and avoid anything too strenuous.');
  await Thread.create(1, 3, 'Prenatal yoga and swimming are excellent for keeping fit and managing back pain.');
  await Thread.create(4, 3, 'Always listen to your body and stop if you feel discomfort or pain.');

  await Thread.create(3, 4, 'Folic acid is crucial! Look for vitamins with DHA for brain development too.');
  await Thread.create(2, 4, 'Look for vitamins with folic acid, iron, calcium, and DHA. These are key for baby\'s development.');
  await Thread.create(1, 4, 'It\'s best to get a recommendation from your healthcare provider based on your specific needs.');
  await Thread.create(6, 4, 'Make sure to start prenatal vitamins as soon as you\'re planning to become pregnant.');

  await Thread.create(3, 5, 'Discuss with your healthcare provider. They might adjust dosages or recommend alternatives.');
  await Thread.create(4, 5, 'Many medications have alternatives that are safer during pregnancy. Always consult your doctor.');
  await Thread.create(1, 5, 'Don\'t stop any chronic medication without speaking to your healthcare provider first.');
  await Thread.create(2, 5, 'Be open about all the medications you\'re taking, including over-the-counter and herbal supplements.');

  await Thread.create(6, 6, 'Start prenatal classes around your second trimester. Pack essentials by week 35!');
  await Thread.create(1, 7, 'Frequent small meals helped me. Ginger tea was a lifesaver for nausea.');
  await Thread.create(2, 8, 'Travel is generally safe until the third trimester but check with your doctor.');
  await Thread.create(3, 9, 'Include preferences for pain management, birthing positions, and who you want in the room.');
  await Thread.create(4, 10, 'Staying hydrated and eating protein-rich snacks can help manage cravings.');
  await Thread.create(5, 11, 'Mindfulness and prenatal yoga helped me manage anxiety. Also, talking to other moms.');
  await Thread.create(6, 12, 'Consider the hospitals policies, midwife availability, and if they support your birth plan.');

  await Thread.create(1, 13, 'I found that keeping a food diary helped me stay aware of my nutrition needs.');
  await Thread.create(2, 1, 'Craving junk food is normal, but try substituting with baked versions for a healthier twist.');
  await Thread.create(3, 2, 'Tracking your weight with your doctor is the best way to know if you\'re on the right track.');
  await Thread.create(4, 3, 'Prenatal yoga classes not only help with stretching but also with relaxation techniques.');
  await Thread.create(5, 4, 'Some health food stores offer consultations to help pick the right vitamins for you.');
  await Thread.create(6, 5, 'There are often safer alternatives for many medications. Definitely a conversation for your doctor.');
  await Thread.create(1, 6, 'Consider a hospital tour to familiarize yourself with the environment and ease anxiety.');
  await Thread.create(2, 7, 'If symptoms seem abnormal or severe, it\'s always better to err on the side of caution and call your doctor.');
  await Thread.create(3, 8, 'For morning sickness, eating small, frequent meals and avoiding strong odors helped me.');
  await Thread.create(4, 9, 'Second trimester is often considered the safest time to travel. Always check with your healthcare provider.');
  await Thread.create(5, 10, 'Discussing your birth plan with your partner and healthcare provider can help ensure your wishes are understood.');
  await Thread.create(6, 11, 'I attended a pregnancy nutrition workshop and it was incredibly helpful for managing cravings!');
  await Thread.create(1, 12, 'Joining a prenatal group can provide support and answer many of your questions in a welcoming environment.');
  await Thread.create(2, 13, 'Reviews and recommendations from friends helped me choose a maternity care provider that was right for me.');
  await Thread.create(3, 14, 'Reflecting on what motherhood means to you and journaling can be a great way to prepare emotionally.');
};
