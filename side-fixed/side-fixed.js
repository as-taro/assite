// �E�B���h�E���T�C�Y������
var timer = false;
$(window).resize(function() {
    var sideWrap = $(".box-contents2"); //�T�C�h�o�[�̊O�g
    var sideArea = $(".sidemenu"); //�T�C�h�o�[
    var sideW = sideWrap.width();
    if(window.innerWidth >= 768) {
	    // �T�C�h�o�[�̃T�C�Y��ύX
	    sideArea.css({"width": sideW});
    } else {
        sideWrap.css({"position": "static"});
        sideArea.css({"position": "static", "width": sideW});
    }
});

// �T�C�h�o�[�Œ菈��
$(window).load(function () {

//�Y���̃Z���N�^�Ȃǂ���

var compare = $(".box-contents"); //��r�R���e���c
var sideWrap = $(".box-contents2"); //�T�C�h�o�[�̊O�g
var sideArea = $(".sidemenu"); //�T�C�h�o�[

var wd = $(window); //�E�B���h�E����
	
//��r�R���e���c�ƃT�C�h�̍������ׂ�

var mainH = compare.height();
var sideH = sideWrap.height();
var sideW = sideWrap.width();
sideArea.css({"width": sideW});

	if(sideH < mainH) { //���C���̕���������ΐF�X��������
		
		//�T�C�h�o�[�̊O�g��relaltive�Ɂi#side���|�W�V�����ŏ�≺�ɌŒ肷�邽�߁j
		sideWrap.css({"position": "relative"});
		
		//�T�C�h�o�[���E�B���h�E��肢����͂ݏo���Ă邩
		var sideOver = wd.height()-sideArea.height();
	
		//�Œ���J�n����ʒu = �T�C�h�o�[�̍��W�{�͂ݏo������
		var starPoint = sideArea.offset().top + (-sideOver);
		
		//�Œ����������ʒu = ���C���R���e���c�̏I�_
		var breakPoint = sideArea.offset().top + mainH;
	
		wd.scroll(function() { //�X�N���[�����̏���
			
			if(window.innerWidth >= 768) {
			
			if(wd.height() < sideArea.height()){ //�T�C�h���j���[����ʂ��傫���ꍇ
				if(starPoint < wd.scrollTop() && wd.scrollTop() + wd.height() < breakPoint){ //�Œ�͈͓�
					sideArea.css({"position": "fixed", "bottom": "20px"}); 
	
				}else if(wd.scrollTop() + wd.height() >= breakPoint){ //�Œ�����ʒu�𒴂�����
					sideArea.css({"position": "absolute", "bottom": "0"});
	
				} else { //���̑��A��ɖ߂�����
					sideArea.css("position", "static");
	
				}
	
			}else{ //�T�C�h���j���[����ʂ�菬�����ꍇ
			
				var sideBtm = wd.scrollTop() + sideArea.height(); //�T�C�h���j���[�̏I�_
				
				if(compare.offset().top < wd.scrollTop() && sideBtm < breakPoint){ //�Œ�͈͓�
					sideArea.css({"position": "fixed", "top": "20px"});
					
				}else if(sideBtm >= breakPoint){ //�Œ�����ʒu�𒴂�����
				
					//�T�C�h�o�[�Œ�ꏊ�ibottom�w�肷��ƕs����o��̂�top����̌Œ�ʒu���Z�o����j
					var fixedSide = mainH - sideH;
					
					sideArea.css({"position": "absolute", "top": fixedSide});
					
				} else {
					sideArea.css("position", "static");
				}
			}
			}
		});
	}
});