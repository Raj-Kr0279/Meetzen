import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineStar } from 'react-icons/ai'
import { BsZoomIn, BsZoomOut } from 'react-icons/bs'
import { FiFile, FiMessageSquare, FiStar, FiZoomIn, FiZoomOut } from 'react-icons/fi'
import { MdArrowBackIosNew, MdAttachFile, MdOutlineAttachFile, MdOutlineEmojiEmotions } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import annot from '../../../assets/annotation.svg'
import prof from '../../../assets/profileDummy.png'
import gallery from '../../../assets/photo_library.svg'
import doc from '../../../assets/description.svg'
import AttachModal from './AnnextureModal'
import AnnextureModal from './AnnextureModal'

const PdfAgenda = () => {
    const [attachModal, setAttachModal] = useState(false)
    const [annexModal, setAnnexModal] = useState(false)
    const [isChat, setChat] = useState(false);
    const navigate = useNavigate()
    return (
        <>
        {annexModal && <AnnextureModal modal={annexModal} setModal={setAnnexModal}/>}
            <div className="flex fixed top-0 z-10 pt-4 pb-2 px-4 w-full justify-between items-center border-b">
                <div className='flex items-center font-semibold text-primary cursor-pointer' onClick={() => navigate("/dashboard")}>
                    <MdArrowBackIosNew className=' text-2xlX font-normal' />
                    <span className=' text-lg font-medium'>Back</span>
                </div>
                <div className='relative'>
                    <AiOutlineSearch className='absolute text-placeholder top-1/2 left-2 -translate-y-1/2' />
                    <input className='text-placeholder border border-topSearch rounded-md py-1.5 px-8' placeholder='Search' type="text" name="search" id="search" />
                </div>

            </div>
            <p className='text-foreground fixed z-20 top-4 left-1/2 -translate-x-1/2 text-mediumSubheading font-semibold'>Meeting WorkSpace</p>


            <div className="flex flex-col gap-4 mt-20 px-10">
                <div className="flex justify-between w-full gap-4 items-center">
                    <div className='flex w-full border border-border rounded-md p-1 gap-2 '>
                        <h3 className={`flex text-primary cursor-pointer gap-2 items-center bg-hover-bg py-2 p-3 rounded-sm`}><FiFile className=' text-mediumHeading'/><span className='text-prof text-medium font-medium'>Notes</span></h3>
                        <h3 className={`flex text-primary cursor-pointer gap-2 items-center ${annexModal ? "bg-pdfActive" : "bg-hover-bg"} py-2 p-3 rounded-sm`} onClick={()=>setAnnexModal(true)}><MdOutlineAttachFile className=' text-mediumHeading' /><span className='text-prof text-medium font-medium'>Attachments</span></h3>
                        <h3 className={`flex text-primary cursor-pointer gap-2 items-center bg-hover-bg py-2 p-3 rounded-sm`}><img src={annot} className=' text-mediumHeading' /><span className='text-prof text-medium font-medium'>Annotations</span></h3>
                        <h3 className={`flex text-primary cursor-pointer gap-2 items-center bg-hover-bg py-2 p-3 rounded-sm`}><FiStar className=' text-mediumHeading' /><span className='text-prof text-medium font-medium'>Favourites</span></h3>
                        <h3 className={`flex text-primary cursor-pointer gap-2 items-center ${isChat ? "bg-pdfActive" : "bg-hover-bg"}  py-2 p-3 rounded-sm`} onClick={()=>setChat(!isChat)}><FiMessageSquare className='text-mediumHeading' /><span className='text-prof text-medium font-medium'>Chat</span></h3>
                        <h3 className={`flex text-primary cursor-pointer gap-2 items-center bg-hover-bg py-2 p-3 rounded-sm`}><FiZoomIn className=' text-mediumHeading' /><span className='text-prof text-medium font-medium'>Zoom In</span></h3>
                        <h3 className={`flex text-primary cursor-pointer gap-2 items-center bg-hover-bg py-2 p-3 rounded-sm`}><FiZoomOut className=' text-mediumHeading' /><span className='text-prof text-medium font-medium'>Zoom Out</span></h3>
                    </div>
                    <span className='text-primary font-medium text-medium'>1/40</span>
                </div>

                <div className="flex gap-4 h-[80dvh] overscroll-y-auto w-full grow-1">
{  !isChat &&                  <div className="w-56 shrink-0">
                        <h3 className='text-white bg-primary py-2 px-4 w-full'>Index</h3>
                        <ul className="flex flex-col gap-2 pt-2">
                            <li className='text-base list-none text-foreground font-semibold'>Section 1
                                <ul>
                                    <li className='pl-3 text-smallCaption font-medium text-placeholder'>Sub Section 1.1</li>
                                    <li className='pl-3 text-smallCaption font-medium text-placeholder'>Sub Section 1.2</li>
                                </ul>
                            </li>
                            <li className='text-base list-none text-foreground font-semibold'>Section 2</li>
                            <li className='text-base list-none text-foreground font-semibold'>Section 3</li>
                        </ul>
                    </div>}
                    <div className="grow-1 overflow-y-auto w-full bg-hover-bg p-4">
                        <p className=' text-foreground text-base font-medium tracking-wider leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium quis. Incidunt blanditiis non iste tempore recusandae quae commodi nisi cum illo quos, ipsum laborum animi autem architecto a ducimus itaque illum aliquid natus facilis veniam! Consequatur quas saepe, quidem dolorem accusantium amet nemo eum dignissimos alias nostrum repudiandae modi natus maxime odit tempora officia vitae velit obcaecati unde consequuntur fugiat qui. Dolorum nam incidunt aspernatur inventore ducimus unde nobis explicabo cumque aliquid corrupti doloremque voluptatum doloribus, et ad, debitis reiciendis excepturi officiis quibusdam fugit nostrum dolore expedita! Consequuntur mollitia esse nobis laboriosam porro optio doloribus quos nam suscipit, reiciendis rerum aut possimus, id beatae et cum! Ab rem laboriosam excepturi nisi repellendus, obcaecati culpa asperiores ullam unde voluptatem nulla laudantium amet exercitationem ut iusto velit! Assumenda commodi aut ratione, blanditiis non architecto nobis consectetur dolores consequatur asperiores maiores harum possimus animi cum deserunt accusamus debitis. Maxime id quibusdam quis, alias dicta dolorem ratione voluptatem ducimus soluta cum itaque nulla tempora ipsum, adipisci consectetur perferendis laborum! Corporis nam, deleniti maxime rerum fugiat placeat incidunt. Eaque tempora omnis deserunt similique accusamus aspernatur, at dolorum asperiores est vero eius, cumque animi adipisci modi dolorem veritatis excepturi expedita. Sit dolores, praesentium facere tenetur ipsa eligendi qui corrupti illum accusamus voluptatem assumenda ex modi veniam eaque fugit, quas, quo placeat? Beatae non cumque, debitis assumenda nostrum accusantium reiciendis vero soluta qui veniam eius aliquid vitae id quo? Vel ratione nisi id iusto corrupti soluta suscipit iste quam assumenda in? Suscipit odio ullam voluptatem dolore reprehenderit laborum, minus non dolorem veritatis similique repellendus alias minima necessitatibus illo ratione delectus blanditiis consectetur! Quos atque excepturi obcaecati minima maxime, aliquid cupiditate nostrum accusantium officia similique corrupti nobis eaque ipsa! Doloribus cum quas doloremque sunt culpa voluptatibus eius delectus rem impedit ratione maxime nemo, maiores illo voluptatum. Repellendus, quisquam nihil omnis itaque repellat sed praesentium optio beatae sequi est placeat fugiat incidunt possimus natus perferendis eius suscipit excepturi, provident enim nobis sint quae? Maiores praesentium, quae tempora doloribus voluptates assumenda? Facilis inventore sapiente ad reiciendis nulla id quia cum neque illo animi iure, consectetur, commodi eum asperiores saepe vitae repellat maxime exercitationem reprehenderit odio, voluptatem temporibus ut atque fuga. Veritatis distinctio, eos, blanditiis ipsam corrupti, odit repellendus aliquam illo vitae a consequatur! Maxime est nam officia harum ad, suscipit sit qui quasi enim quae dolorum totam inventore quibusdam repudiandae voluptate rem omnis sequi quia hic. Totam repellat voluptatem quas. Quam, adipisci laboriosam atque blanditiis corporis et, nostrum ducimus similique quo voluptates sint quidem veniam debitis. Voluptatum, id quibusdam? Totam magnam expedita vel, explicabo, corporis molestiae quasi veniam enim quidem pariatur odit numquam maxime perspiciatis, dignissimos accusantium libero alias non at similique dolores voluptas magni possimus! Quas, voluptas dolores mollitia repudiandae perspiciatis obcaecati incidunt quaerat vitae sint repellendus quis? Ipsa praesentium ab veritatis nobis impedit dolorum quae! Voluptate aperiam veritatis vel aliquam commodi voluptates quae reprehenderit eum aut natus iste nihil molestias alias quaerat quia facere deleniti minima a accusantium, sed quod animi. Eveniet rerum esse veniam in eum velit autem voluptatibus exercitationem enim quidem, eius porro at hic aliquam asperiores fugit, minus quod est vel perspiciatis nihil rem quae placeat? Eaque eos impedit sit maxime saepe voluptatem voluptates, dicta nemo. Culpa temporibus quod ab non quia expedita, corporis voluptates quidem distinctio ad molestias iste fugit fuga magni velit provident dolor nemo voluptatum sed laudantium in sunt quae. Ipsum labore harum magni, molestias accusamus ipsa illo quia blanditiis! Quisquam illo exercitationem delectus? Voluptate fuga, quia temporibus itaque quisquam excepturi est molestiae ratione animi quas hic reiciendis eos repellat esse consequatur assumenda adipisci laboriosam, omnis, eaque veritatis atque pariatur exercitationem officiis? Sunt, sed ut? Nostrum distinctio facere repellat beatae et, velit obcaecati numquam, quisquam dolores assumenda quibusdam. Ea sed obcaecati et placeat nobis quo, est iusto? Nihil, magni inventore consequatur pariatur libero qui iste accusamus incidunt, consectetur voluptatibus eaque, nemo optio maxime itaque eius et in suscipit omnis labore placeat a sit error deserunt. Dolorem quam, quidem, adipisci dicta ullam amet numquam ex sint fuga fugit et. Ut, incidunt! Eveniet officiis deleniti vel nemo, placeat, aperiam itaque tempora quasi, pariatur veniam ipsa facere expedita optio nam quam dignissimos quaerat corrupti libero consectetur distinctio culpa nihil provident ipsum. Dicta iste recusandae consectetur cum ut quod laudantium sapiente ad voluptates non, quam quisquam debitis perspiciatis blanditiis aut, quis voluptatum? Ad dolorem quaerat id ex doloremque necessitatibus explicabo possimus suscipit quam iure, at deserunt laudantium quas, non aliquid veritatis nam rem voluptatibus vero quod dolor ipsam sapiente dolore. A non, facilis dignissimos ipsum iusto ducimus delectus sequi voluptates distinctio illum quis reprehenderit magnam eveniet quos unde odit nesciunt culpa? Eveniet ex dolorem ab eligendi, temporibus quia quos vel magnam amet labore sint at obcaecati, nemo dicta incidunt nisi distinctio porro enim totam sunt officiis, minus explicabo. Obcaecati laborum molestias adipisci dolorem nulla tenetur ullam quas commodi. Praesentium sit ut cupiditate optio, vel, quia ex doloribus labore necessitatibus cumque ab? Harum necessitatibus totam, eos saepe voluptas sit est voluptatum quos odio consequuntur nihil, excepturi accusamus expedita corporis dolores nisi, non voluptate obcaecati odit rem laudantium dicta recusandae. Corporis velit nulla deleniti vitae accusantium asperiores repudiandae omnis officiis ipsum in. Odio ut, assumenda officia officiis, aspernatur libero iusto consequatur minus quisquam, delectus deserunt optio impedit modi ullam vel repudiandae! Temporibus odio est magnam quasi laborum, quo iusto earum incidunt velit dolorem deserunt totam officia molestias natus asperiores eveniet quidem magni reprehenderit aperiam! Quibusdam et illum officia in eveniet! Sint rem atque a, deserunt cumque aliquid odio dolore perferendis reiciendis culpa unde nulla doloremque quo doloribus eligendi amet quisquam magni eos illum mollitia iusto. Nulla et porro atque beatae ipsum sint sapiente, adipisci a nisi cupiditate soluta hic alias excepturi itaque suscipit. Ad veniam ea quaerat pariatur maiores, minus, corrupti nihil earum nostrum numquam ipsam, architecto laboriosam. Et voluptas repellendus blanditiis nisi, eligendi dolorum quod laudantium molestias repudiandae reprehenderit quam eaque iste eius velit aspernatur optio facilis debitis possimus placeat delectus eos deleniti. Pariatur suscipit dolorum quas error laudantium, atque reprehenderit mollitia. Quo, minima! Quo corrupti ex labore quam laborum fugit. Aspernatur asperiores harum eveniet quasi at eius tempora officiis vitae, odit dolores vel quas corrupti cum distinctio eum. Doloribus praesentium repudiandae iste deserunt illum omnis officia excepturi dolores natus. Laboriosam distinctio reprehenderit sapiente repellat eius aliquid saepe? Voluptas a optio ducimus maiores! Commodi cumque, cupiditate soluta a labore laboriosam facilis, quae ipsum ipsam tenetur id voluptate esse quis et. Voluptatibus aut sequi porro exercitationem cupiditate consectetur. Atque ducimus quos eveniet illo quibusdam eius mollitia quaerat magni. Assumenda a, possimus recusandae nemo est, obcaecati, dicta velit quo nostrum ea repudiandae saepe! Quasi enim rem reprehenderit eveniet debitis praesentium ad, repellat iste? Eum possimus, nostrum velit accusantium nam aut nesciunt? Mollitia magni quos fugiat sed, animi architecto ducimus vitae placeat magnam eius ipsum, veniam error beatae. Repellat illum natus cum corporis tempora id placeat dolores esse aliquam ab illo consequatur accusantium vel voluptatum, eius quibusdam quidem deserunt ullam harum velit suscipit! Eaque quos tempore in, explicabo blanditiis, modi repellendus minus officiis animi quae voluptatem quo facilis cum, iure commodi harum cumque sit culpa repellat enim earum qui perferendis. Enim deleniti non libero commodi aliquam reprehenderit nostrum quae accusantium, eos illo consequatur dicta, error fugiat quibusdam officiis, reiciendis ullam quaerat sapiente quasi at. Similique illum dolorum consequuntur. Iste magni eius sunt dignissimos saepe ducimus itaque optio! Iste tenetur dolor quasi repellat asperiores corporis doloremque optio neque fuga debitis accusantium reprehenderit maiores, eligendi, ducimus deserunt obcaecati sunt consectetur doloribus suscipit quia inventore magnam! Dignissimos ad voluptatibus distinctio obcaecati quaerat aperiam, aspernatur nisi quidem voluptas? Atque aspernatur architecto voluptate. Minima maxime dolorem, officiis optio ex aliquam, doloribus non facilis quae deleniti laudantium voluptate pariatur eum a? Cupiditate maiores quo omnis eveniet beatae eius asperiores laborum maxime pariatur deleniti! Fugiat accusantium aliquam debitis minima illo corporis, cumque, sequi deserunt mollitia at ipsum enim tempora qui quas laboriosam ducimus. Possimus quos ipsam illum voluptatum dolorum optio laborum? Hic illo necessitatibus corporis mollitia voluptatem ad repellat dignissimos sapiente voluptatibus saepe cupiditate cumque, rem porro vitae cum in deleniti quibusdam ab facilis distinctio! Quas, laborum reprehenderit pariatur nihil rem iste consectetur delectus id nesciunt, vel eos dicta maxime! Ipsum itaque quaerat in illo magnam, officiis labore minus nesciunt ad! Ea repellendus accusamus nostrum magni ad facere, voluptatibus accusantium repellat laudantium fugiat quam neque labore, tenetur iste libero nulla debitis veritatis eius? Vitae maiores veritatis consequuntur sapiente. Dolores perspiciatis voluptatum reiciendis officia nobis alias? Quaerat minus saepe, consequatur quidem voluptates illo in quo. Quasi veniam libero nisi iusto deleniti dignissimos maiores perspiciatis laboriosam earum accusantium temporibus laudantium ducimus rerum, quidem ipsum necessitatibus! Eaque dolorem maiores minima natus ut ducimus, consectetur dolor sed explicabo, ea exercitationem, praesentium deserunt omnis perspiciatis voluptas. Voluptate quisquam perspiciatis perferendis! Dolorem odio saepe explicabo ipsa repellat error ipsam mollitia similique veritatis blanditiis libero, id, eos animi tempore. Laboriosam impedit tempore beatae eius incidunt nemo nam nobis fugiat, fugit dolorem commodi temporibus, excepturi cupiditate aliquid iure veritatis eum quidem repellendus architecto nulla rerum expedita mollitia suscipit. Consectetur earum id recusandae sint tempore, quas rerum optio. Quasi laudantium aperiam ipsa esse possimus eaque quaerat quisquam, temporibus, accusantium distinctio officia nostrum. Quas est fuga tempore? Earum aliquam ratione, totam perferendis officiis nulla laborum dicta quae, possimus culpa labore fugit. Ipsam, libero reprehenderit quis nulla obcaecati ea! Eius tempore, sapiente mollitia, blanditiis consequuntur quaerat iure architecto eum fugiat adipisci dolore, recusandae nobis delectus veniam cumque accusantium officia! Quae quis esse temporibus perspiciatis natus itaque ducimus. Incidunt iusto, veniam animi adipisci molestias dolorem! Minima incidunt beatae sunt, aspernatur quas itaque neque deleniti consectetur nobis ipsam et! Eaque, consequuntur? Quasi laborum eius in aliquid veniam accusantium sit fugiat illum quis nihil, maiores perferendis sunt obcaecati aut praesentium ut illo omnis doloribus fugit natus pariatur architecto quos! Neque provident molestias doloribus aperiam eos culpa repudiandae totam quidem, magni perspiciatis eveniet pariatur temporibus hic a velit, suscipit facere. Nostrum dolores quisquam debitis, expedita asperiores magni animi nesciunt, hic ab qui fugit odit placeat temporibus numquam optio repudiandae explicabo voluptatum? Consequatur cum officia, doloribus vel voluptatum a recusandae quas itaque. Doloremque unde suscipit culpa est in dolor nobis tempora perspiciatis, laudantium ducimus optio consequatur vel vero voluptas assumenda. Expedita officiis accusamus dolore quas laborum error, rerum saepe cupiditate dolorem voluptate doloribus maxime aliquam eius amet consequatur natus debitis maiores distinctio repudiandae corporis. Aspernatur vel fuga recusandae veniam voluptates. Porro at saepe, quaerat, incidunt sunt cumque praesentium illo vero sit quas assumenda, recusandae alias maxime! Vitae corrupti, dolorem necessitatibus commodi earum maxime cumque dignissimos nihil quae, ratione enim, eius laudantium? Tempora eveniet nihil id debitis aut aperiam vel rem doloribus eum! Magni blanditiis ea eius nihil aut velit. Sunt esse, cupiditate laborum quasi quisquam similique! Eligendi modi animi facilis, suscipit, ipsa consequatur fuga delectus reiciendis tenetur nulla optio aliquid vero aut fugiat repellendus harum vel beatae ex. Atque cum tempora quae, pariatur molestias distinctio ad quas eaque aperiam facilis itaque expedita dolore natus ipsam asperiores. Reprehenderit deserunt animi ex voluptatem, accusantium itaque ea mollitia quas hic, eum minima debitis nam eveniet eligendi officiis quisquam possimus quaerat sit nesciunt asperiores vitae eos labore corrupti? Fuga ea perspiciatis nisi doloribus vel expedita quaerat, quasi alias pariatur ipsam! Repellat impedit quibusdam, veritatis voluptatum cum esse officiis facilis in consectetur sed aliquam culpa quis quidem suscipit minus eius voluptate officia eligendi debitis praesentium expedita totam ratione omnis ipsum. Labore eos eaque doloremque architecto quia quae dolorem minima ut vitae! Voluptatum laudantium molestiae eveniet provident officia itaque blanditiis dignissimos vero debitis quod suscipit, explicabo nemo ipsam labore? Eveniet soluta facere magnam, ab velit nostrum modi impedit mollitia accusamus hic ut voluptatem nihil rerum ratione nisi atque sapiente, tenetur dolore cumque asperiores nesciunt a sint vel. Ipsa nesciunt qui, non in optio maxime? Aut nisi sapiente, a et natus vitae ratione error unde quis asperiores sit harum dolores sequi laborum tenetur laudantium ipsum odio at sunt repellendus optio. Expedita reiciendis adipisci natus eligendi, quam saepe dolores doloremque beatae esse nihil quae nemo hic impedit ea aliquam iste error. Cum corporis, cumque fugit culpa magnam quaerat ullam vel!
                        </p>
                    </div>

                    {isChat && 
                    
                    <div className=' w-5/12 flex flex-col shrink-0'>
                    <div className="chat__user__header flex px-8 border-b border-border py-4 items-center">
                        <div className="relative w-10 h-10 shrink-0 mr-4">
                            <img src={prof} className='w-full h-full rounded-full' alt="" />
                            <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                        </div>
                        <span className='text-foreground text-lg font-medium'>Jamie Spencer</span>
                    </div>
                    <div className="chat__area flex flex-col gap-5 h-[75vh] overflow-y-auto break-words py-6 px-8">
                        <div className='flex w-[85%] items-start mb-auto'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-white font-normal text-xs  text-foreground p-4 rounded-[10px_10px_3px_10px] '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder font-normal'>08:15 PM</span>
                            </div>
                        </div>
                        <div className='flex ml-auto w-[85%] flex-row-reverse items-start'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-primary text-white font-normal text-xs p-4 rounded-[10px_10px_3px_10px] '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder flex justify-end pt-2 font-normal'>08:15 PM</span>
                            </div>
                        </div>
                        <div className='flex w-[85%] items-start mb-auto'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-white font-normal text-xs  text-foreground p-4 rounded-[10px_10px_3px_10px] '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder font-normal'>08:15 PM</span>
                            </div>
                        </div>
                        <div className='flex ml-auto w-[85%] flex-row-reverse items-start'>
                            <div className="relative w-10 h-10 shrink-0 mr-4">
                                <img src={prof} className='w-full h-full rounded-full' alt="" />
                                <div className="absolute w-[.563rem] h-[.563rem] border border-white bg-success rounded-full right-0 bottom-0"></div>
                            </div>
                            <div className=' mx-4'>
                                <p className='bg-primary text-white font-normal text-xs p-4 rounded-[10px_10px_3px_10px] '>Id ultricies quis ipsum eu nibh ullamcorper pharetra velit orci. Nulla nunc augue in sit. Nulla ultrices adipiscing turpis placerat in tempor sagittis tortor.</p>
                                <span className=' text-xs text-placeholder flex justify-end pt-2 font-normal'>08:15 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full py-4 px-8 bg-chatInput items-center gap-4">
                        <img src={prof} className='w-10 h-10 rounded-full' alt="" />
                        <div className='relative w-full'>
                            <MdOutlineEmojiEmotions className='absolute text-mediumHeading text-placeholder top-1/2 right-10 -translate-y-1/2' />
                            <MdAttachFile className='absolute text-mediumHeading text-placeholder top-1/2 right-4 -translate-y-1/2' onClick={() => setAttachModal(!attachModal)} />
                            <div className={`${attachModal ? "flex" : "hidden"} absolute bottom-full mb-2 bg-white shadow-filter py-2 rounded-sm right-0 flex-col`}>
                                <div className="flex items-center gap-1 py-2 border-b border-profileModalBorder px-4"><img src={gallery} className='w-[16px] h-auto ' alt="" /><span className=' text-xs font-normal text-prof' >Photos & Videos</span></div>
                                <div className="flex items-center gap-1 py-2 px-4"><img src={doc} className='w-[16px] h-auto ' alt="" /><span className=' text-xs font-normal text-prof' >Document</span></div>
                            </div>
                            <input placeholder="Write your message here..." className='w-full border text-foreground border-topSearch rounded-md py-3 px-8' type="text" name="search" id="search" />
                        </div>
                    </div>

                </div>
                    }
                </div>
            </div>
        </>
    )
}

export default PdfAgenda




