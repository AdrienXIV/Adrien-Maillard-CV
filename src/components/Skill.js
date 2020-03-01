import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

export class Skill extends React.Component {
    render() {
        return (
            <div className="ui four column grid">
                <div className="column">
                    <div className="ui segment">
                        <h2 className="ui header" style={{textAlign:'center'}}>Languages</h2>
                        <Divider />
                        <Image.Group size='small'>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} />
                            <Image src={"https://fr-wiki.ikoula.com/images/6/61/Php.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1024px-Bash_Logo_Colored.svg.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/C_Sharp_logo.png/640px-C_Sharp_logo.png"} />
                            <Image src={"https://mit2online.com/school/pluginfile.php/133/course/overviewfiles/c-programming.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"} />
                            <Image src={"https://lh3.googleusercontenthttps://byfeel.info/wp-content/uploads/2015/02/css-html2-e1517475681211.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png"} />
                        </Image.Group>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <h2 className="ui header" style={{textAlign:'center'}}>Frameworks - Librairies</h2>
                        <Divider />
                        <Image.Group size='small'>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"} />
                            <Image src={"https://i.dlpng.com/static/png/371425_preview.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"} />
                            <Image src={"https://www.hello-pomelo.com/wp-content/uploads/2019/07/expressjs.png"} />
                            <Image src={"https://blog.daydevelops.com/storage/cover/2019/11/24/P7ruVkm1evJ0iTabU3zOW7RZcmlPwZZwzH0626JO.png"} />
                            <Image src={"https://symfony.com/logos/symfony_black_03.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"} />
                            <Image src={"https://www.stickpng.com/assets/images/58482f0ecef1014c0b5e4a7a.png"} />
                            <Image src={"https://bitsrc.imgix.net/11b8acfbc5f7a64c0ecec1e2a8d4b4866eaf4431.png"} />
                            <Image src={"https://www.stickpng.com/assets/images/5847ea22cef1014c0b5e4833.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/1200px-Xamarin-logo.svg.png"} />
                        </Image.Group>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <h2 className="ui header" style={{textAlign:'center'}}>Base de données</h2>
                        <Divider />
                        <Image.Group size='small'>
                            <Image src={"https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1024px-MongoDB-Logo.svg.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png"} />
                        </Image.Group>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <h2 className="ui header" style={{textAlign:'center'}}>Environnements</h2>
                        <Divider />
                        <Image.Group size='small'>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Windows_logo_%E2%80%93_2012_%28dark_blue%29.svg/1200px-Windows_logo_%E2%80%93_2012_%28dark_blue%29.svg.png"} />
                            <Image src={"https://www.stickpng.com/assets/images/58480e82cef1014c0b5e4927.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png"} />
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/f/f3/Visual_Studio_Code_0.10.1_icon.png"} />
                            <Image src={"https://www.stickpng.com/assets/images/58482afbcef1014c0b5e4a21.png"} />
                            <Image src={"https://www.dicoding.com/blog/wp-content/uploads/2019/04/androidlogo.png"} />
                        </Image.Group>
                    </div>
                </div>
            </div>
        );
    }
}