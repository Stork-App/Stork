const Post = require('../models/post');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('posts').del()

  await Post.create(1, 'What foods should I avoid during pregnancy', 'I have been eating a lot of junk food recently and have not been feeling too well. I have been craving a lot of oily foods like french fries and fried Oreo. Are these foods okay to eat?' );

  await Post.create(2, 'How much weight gain is normal during pregnancy?', 'I am not sure if I have been gaining a lot of weight because of the pregnancy.' );
  
  await Post.create(3,  'Can I continue to exercise while pregnant?', 'How do I work out while pregnant? Are there any stretches that would help me with my back pain? I have been feeling very sore lately and would like to stretch more frequently!');

  await Post.create(4, 'What prenatal vitamins do I need to take?', 'I just found out I\'m pregnant and want to make sure I\'m taking the right prenatal vitamins. Are there specific brands or ingredients I should look for?');
  
  await Post.create(5, 'Are certain medications safe during pregnancy?', 'I have a chronic condition and take medication regularly. I\'m worried about how it might affect my baby. Are there safe alternatives or adjustments I should consider?');
  
  await Post.create(2, 'When should I start preparing for labor and delivery?', 'I\'m a first-time mom, and the idea of labor is both exciting and nerve-wracking. When should I start taking prenatal classes, and what essentials should I pack for the hospital?');
  
  await Post.create(3, 'What are common pregnancy symptoms and when should I be concerned?', 'I\'m experiencing some symptoms that I assume are normal, but I want to be sure. When should I contact my doctor, and what signs indicate a potential issue during pregnancy?');
  
  await Post.create(4, 'How can I alleviate morning sickness?', 'Morning sickness is hitting me hard, and I\'m struggling to find relief. Any home remedies or tips for managing nausea during the first trimester?');
  
  await Post.create(3, 'Is it safe to travel during pregnancy?', 'I have a family event coming up, and I\'m unsure if it\'s safe to travel while pregnant. What precautions should I take, and are there specific stages of pregnancy when travel is riskier?');
  
  await Post.create(3, 'What should I include in my birth plan?', 'As my due date approaches, I want to create a birth plan, but I\'m not sure where to start. What are the essential elements to include, and how can I communicate my preferences effectively with the medical team?');
  
  await Post.create(5, 'How to manage pregnancy cravings?', 'I find myself craving unusual combinations of food, and it\'s hard to resist. Any tips for managing these cravings without compromising a healthy diet during pregnancy?');
  
  await Post.create(2, 'Dealing with pregnancy-related anxiety', 'I\'m feeling overwhelmed and anxious about the changes ahead. How do you cope with pregnancy-related anxiety, and are there support groups or resources you recommend?');
  
  await Post.create(5, 'Choosing a maternity care provider', 'I\'m in the process of selecting a maternity care provider, and it\'s a bit overwhelming. What factors should I consider, and are there specific questions I should ask during consultations?');
  
  await Post.create(3, 'Preparing emotionally for motherhood', 'Becoming a mom is both exciting and daunting. How did you prepare emotionally for motherhood, and are there practices or activities that helped you feel more confident and connected to your baby?');
};
