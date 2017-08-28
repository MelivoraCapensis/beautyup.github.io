$(function(){

$("#portfolio-grid").elastic_grid({
				'showAllText' : 'Все',
				'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
				'hoverDirection': true,
				'hoverDelay': 0,
				'hoverInverse': false,
				'expandingSpeed': 500,
				'expandingHeight': 500,
				'items' :
					[
						{
							'title'         : 'Вечерний макияж',
							'description'   : 'Красивый, подчеркивающий макияж для дружки на свадьбе.',
							'thumbnail'     : ['images/portfolio/small/druzhka_evt/ZQ693HGsK-o.jpg', 'images/portfolio/small/druzhka_evt/6pqbe7i-cBg.jpg', 'images/portfolio/small/druzhka_evt/2MPMdMtl1DE.jpg'],
							'large'         : ['images/portfolio/large/druzhka_evt/ZQ693HGsK-o.jpg', 'images/portfolio/large/druzhka_evt/6pqbe7i-cBg.jpg', 'images/portfolio/large/druzhka_evt/2MPMdMtl1DE.jpg'],
							'img_title'     : ['Макияж дружки Запорожье', '', 'вечерний макияж', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмортеть', 'url' : 'vk.com', 'new_window' : true }
							],
							'tags'          : ['Вечерний макияж']
						},
						{
							'title'         : 'Макияж для фотосессии',
							'description'   : 'Макияж для фотосессии журнала "Мужской клуб" ',
							'thumbnail'     : ['images/portfolio/small/model_ps/1.jpg', 'images/portfolio/small/model_ps/2.jpg'],
							'large'         : ['images/portfolio/large/model_ps/1.jpg', 'images/portfolio/large/model_ps/2.jpg'],
							'img_title'     : ['Макияж для фотосессии Запорожье', 'jquery elastic grid 7 ', 'jquery elastic grid 8', 'jquery elastic grid 9', 'jquery elastic grid 9'],
							'button_list'   :
							[
								{ 'title':'Посмортеть', 'url':'https://vk.com/id11920394?w=wall11920394_4130%2Fall', 'new_window' : true}
							],
							'tags'          : ['Свадебный макияж']
						},
						{
							'title'         : 'Backstage | За кулисами',
							'description'   : 'ACADEMY FASHION SHOW 2015. Подготовка девочек к показу.',
							'thumbnail'     : ['images/portfolio/small/backstage/1.jpg', 'images/portfolio/small/backstage/2.jpg', 'images/portfolio/small/backstage/3.jpg', 'images/portfolio/small/backstage/4.jpg', 'images/portfolio/small/backstage/5.jpg', 'images/portfolio/small/backstage/6.jpg', 'images/portfolio/small/backstage/7.jpg', 'images/portfolio/small/backstage/8.jpg', 'images/portfolio/small/backstage/9.jpg', 'images/portfolio/small/backstage/10.jpg', 'images/portfolio/small/backstage/11.jpg'],
							'large'         : ['images/portfolio/large/backstage/1.jpg', 'images/portfolio/large/backstage/2.jpg', 'images/portfolio/large/backstage/3.jpg', 'images/portfolio/large/backstage/4.jpg', 'images/portfolio/large/backstage/5.jpg', 'images/portfolio/large/backstage/6.jpg', 'images/portfolio/large/backstage/7.jpg', 'images/portfolio/large/backstage/8.jpg', 'images/portfolio/large/backstage/9.jpg', 'images/portfolio/large/backstage/10.jpg', 'images/portfolio/large/backstage/11.jpg'],
							'img_title'     : ['за кулисами визажа', 'jquery elastic grid 2', 'jquery elastic grid 3', 'jquery elastic grid 4', 'jquery elastic grid 5'],
							'button_list'   :
							[
								{ 'title':'Посмортеть', 'url' : 'https://vk.com/id11920394?w=wall11920394_3959%2Fall', 'new_window' : true }
							],
							'tags'          : ['Дневной макияж']
						},
						{
							'title'         : 'Макияж для фотосессии',
							'description'   : 'Макияж для фотосессии журнала "Мужской клуб". Макияж: Анна Барушова',
							'thumbnail'     : ['images/portfolio/small/model_ps2/2.jpg','images/portfolio/small/model_ps2/1.jpg'],
							'large'         : ['images/portfolio/large/model_ps2/2.jpg','images/portfolio/large/model_ps2/1.jpg'],
							'img_title'     : ['Макияж для фотосессии Запорожье', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : 'https://vk.com/id11920394?w=wall11920394_4134%2Fall', 'new_window' : true }
							],
							'tags'          : ['Дневной макияж', 'Свадебный макияж']
						},
						{
							'title'         : 'Макияж на фотосессию',
							'description'   : 'Макияж на фотосессию для Юли. Макияж: Анна Барушова ',
							'thumbnail'     : ['images/portfolio/small/model_ps3/1.jpg', 'images/portfolio/small/model_ps3/2.jpg'],
							'large'         : ['images/portfolio/large/model_ps3/1.jpg', 'images/portfolio/large/model_ps3/2.jpg'],
							'img_title'     : ['Макияж для фотосессии Запорожье', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : 'https://vk.com/id11920394?w=wall11920394_4137%2Fall', 'new_window' : true }
							],
							'tags'          : ['Свадебный макияж']
						},
						{
							'title'         : 'Макияж для фотосессии',
							'description'   : 'Почувствуй вкус жизни!',
							'thumbnail'     : ['images/portfolio/large/model_ps4/1.jpg','images/portfolio/large/model_ps4/2.jpg', 'images/portfolio/large/model_ps4/3.jpg', 'images/portfolio/large/model_ps4/4.jpg'],
							'large'         : ['images/portfolio/large/model_ps4/1.jpg','images/portfolio/large/model_ps4/2.jpg', 'images/portfolio/large/model_ps4/3.jpg', 'images/portfolio/large/model_ps4/4.jpg'],
							'img_title'     : ['Макияж для фотосессии', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : 'https://vk.com/id11920394?w=wall11920394_4152%2Fall', 'new_window' : true }
							],
							'tags'          : ['Фотосессия']
						},
						{
							'title'         : 'Макияж для журнала',
							'description'   : 'Макияж для журнала "Мужской клуб". Макияж: Анна Барушова.',
							'thumbnail'     : ['images/portfolio/large/model_ps6/1.jpg', 'images/portfolio/large/model_ps6/2.jpg', 'images/portfolio/large/model_ps6/3.jpg', 'images/portfolio/large/model_ps6/4.jpg'],
							'large'         : ['images/portfolio/large/model_ps6/1.jpg', 'images/portfolio/large/model_ps6/2.jpg', 'images/portfolio/large/model_ps6/3.jpg', 'images/portfolio/large/model_ps6/4.jpg'],
							'img_title'     : ['Макияж для журнала Запорожье', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : 'https://vk.com/id11920394?w=wall11920394_4191%2Fall', 'new_window' : true }
							],
							'tags'          : ['Фотосессия']
						},
						{
							'title'         : 'Вечерний макияж',
							'description'   : 'Нежный и подчеркивающий вечерний макияж для очаровательной девушки.',
							'thumbnail'     : ['images/portfolio/large/kristina_evt/1.jpg', 'images/portfolio/large/kristina_evt/2.jpg'],
							'large'         : ['images/portfolio/large/kristina_evt/1.jpg', 'images/portfolio/large/kristina_evt/2.jpg'],
							'img_title'     : ['Вечерний макияж в Запорожье', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : '#', 'new_window' : true }
							],
							'tags'          : ['Вечерний макияж']
						},
						{
							'title'         : 'Конкурс "Зеркало моды"',
							'description'   : 'Спасибо огромное за веру в меня моим родным, друзьям и моему тренеру, которая вдохновляла, поддерживала',
							'thumbnail'     : ['images/portfolio/large/model_ps5/1.jpg','images/portfolio/large/model_ps5/2.jpg', 'images/portfolio/large/model_ps5/3.jpg', 'images/portfolio/large/model_ps5/4.jpg', 'images/portfolio/large/model_ps5/5.jpg', 'images/portfolio/large/model_ps5/6.jpg'],
							'large'         : ['images/portfolio/large/model_ps5/1.jpg','images/portfolio/large/model_ps5/2.jpg', 'images/portfolio/large/model_ps5/3.jpg', 'images/portfolio/large/model_ps5/4.jpg', 'images/portfolio/large/model_ps5/5.jpg', 'images/portfolio/large/model_ps5/6.jpg'],
							'img_title'     : ['Конкурс визажа', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : 'https://vk.com/id11920394?w=wall11920394_4176%2Fall', 'new_window' : true }
							],
							'tags'          : ['Фотосессия']
						},
						{
							'title'         : 'Конкурс красоты',
							'description'   : 'Конкурс красоты "Королева Запорожья" Макияж: Анна Барушова',
							'thumbnail'     : ['images/portfolio/large/model_ps7/1.jpg','images/portfolio/large/model_ps7/2.jpg', 'images/portfolio/large/model_ps7/3.jpg'],
							'large'         : ['images/portfolio/large/model_ps7/1.jpg','images/portfolio/large/model_ps7/2.jpg', 'images/portfolio/large/model_ps7/3.jpg'],
							'img_title'     : ['Конкурс красоты', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : 'https://vk.com/id11920394?w=wall11920394_4257%2Fall', 'new_window' : true }
							],
							'tags'          : ['Фотосессия']
						},
						{
							'title'         : 'Свадебный макияж',
							'description'   : 'Нежный свадебный макияж для красавицы Марины',
							'thumbnail'     : ['images/portfolio/large/wed_1/1.jpg','images/portfolio/large/wed_1/2.jpg'],
							'large'         : ['images/portfolio/large/wed_1/1.jpg','images/portfolio/large/wed_1/2.jpg'],
							'img_title'     : ['Свадебный макияж', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Посмотреть', 'url' : 'https://vk.com/id11920394?w=wall11920394_4264%2Fall', 'new_window' : true }
							],
							'tags'          : ['Свадебный макияж']
						},
						{
							'title'         : 'Вечерний макияж на фотосессию',
							'description'   : 'Красавица Татьяна🌷 на фотосессию для журнала "Мужской клуб" ',
							'thumbnail'     : ['images/portfolio/large/evt_1/1.jpg','images/portfolio/large/evt_1/2.jpg'],
							'large'         : ['images/portfolio/large/evt_1/1.jpg','images/portfolio/large/evt_1/2.jpg'],
							'img_title'     : ['Вечерний макияж Запорожье', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Demo', 'url' : 'https://vk.com/id11920394?w=wall11920394_4265%2Fall', 'new_window' : true }
							],
							'tags'          : ['Вечерний макияж']
						},
						{
							'title'         : 'Свадебный макияж',
							'description'   : 'Прекрасная 🌸и нежная невеста Владислава',
							'thumbnail'     : ['images/portfolio/large/wed_2/1.jpg','images/portfolio/large/wed_2/2.jpg'],
							'large'         : ['images/portfolio/large/wed_2/1.jpg','images/portfolio/large/wed_2/2.jpg'],
							'img_title'     : ['Свадебный макияж', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Demo', 'url' : 'https://vk.com/id11920394?w=wall11920394_4277%2Fall', 'new_window' : true }
							],
							'tags'          : ['Свадебный макияж']
						},
						{
							'title'         : 'Swiss chard pumpkin',
							'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
							'thumbnail'     : ['https://vk.com/video11920394_456239062'],
							'large'         : ['https://vk.com/video11920394_456239062'],
							'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true }
							],
							'tags'          : ['Вечерний макияж']
						},
						{
							'title'         : 'Spinach winter purslane',
							'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
							'thumbnail'     : ['images/portfolio/small/9.jpg','images/portfolio/small/15.jpg', 'images/portfolio/small/11.jpg', 'images/portfolio/small/10.jpg'],
							'large'         : ['images/portfolio/large/9.jpg','images/portfolio/large/15.jpg', 'images/portfolio/large/11.jpg', 'images/portfolio/large/10.jpg'],
							'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
							'button_list'   :
							[
								{ 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
								{ 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
							],
							'tags'          : ['Фотосессия', 'Свадебный макияж']
						}

					]
			});
});