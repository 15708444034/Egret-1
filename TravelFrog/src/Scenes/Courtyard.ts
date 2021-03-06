class Courtyard extends egret.Sprite{
	public constructor() {
		super();
		this.CreateScene();
	}
	
	private backgroundSprite:egret.Sprite;
	private background:egret.Bitmap;
	private icon:egret.Bitmap;

	private CreateScene()
	{

    	this.background = new egret.Bitmap();
    	this.background.texture = RES.getRes("haikei_niwa_png");
    	this.addChild(this.background);
		this.background.x=Data.getscreenWidth()-this.width;
		this.background.touchEnabled=true;
		this.background.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.move,this);
		this.background.addEventListener(egret.TouchEvent.TOUCH_END,this.TouchEnd,this);

		this.icon = new egret.Bitmap();
    	this.icon.texture = RES.getRes("icon_house_84_88_png");
    	this.addChild(this.icon);

	}

	private initialPoin:number=0;
	private move(evt:egret.TouchEvent)
	{
		console.log("this.width: "+this.width+"--this.background.width: "+this.background.width);
		if(this.initialPoin!=0 && this.x<=0 && this.x>=Data.getscreenWidth()-this.width) {
			this.x+=evt.stageX-this.initialPoin;
		}
		if(this.x>0)
		{
			this.x=0;
		}
		if(this.x<Data.getscreenWidth()-this.width)
		{
			this.x=Data.getscreenWidth()-this.width;
		}
		this.initialPoin=evt.stageX;
	}

	private TouchEnd()
	{
		this.initialPoin=0;
	}
}

