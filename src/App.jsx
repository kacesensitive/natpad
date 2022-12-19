import { useState } from "react";
import * as React from "react";
import Cookies from "universal-cookie";
import { Card, Button, Textarea, Modal, Alert } from "flowbite-react";
import { TbRotate360 } from "react-icons/tb";
import { GiSodaCan } from "react-icons/gi";
import { HiInformationCircle } from "react-icons/hi";
import { IoIosColorPalette, IoMdAddCircle } from "react-icons/all";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineFontColors,
  AiOutlineQuestion,
  AiOutlineExpandAlt,
  AiOutlineShrink,
  AiFillDelete,
} from "react-icons/ai";
import { BiEraser } from "react-icons/bi";
import { SliderPicker } from "react-color";
import { Footer_ } from "./Footer";
import "./App.css";
import "flowbite";
import Moveable from "react-moveable";

function App() {
  const cookies = new Cookies();
  const setCookie = (cookie, value) => {
    const consent = cookies.get("CookieConsent");
    if (consent) cookies.set(cookie, value);
  };
  const [alreadyCannedAlertVisible, setAlreadyCannedAlertVisible] =
    useState(false);
  const Warning = () => {
    setTimeout(() => {
      setAlreadyCannedAlertVisible(false);
    }, 2000);

    return (
      <Alert
        className={`warning-container ${
          alreadyCannedAlertVisible ? "visible" : "hidden"
        }`}
        color="failure"
        icon={HiInformationCircle}
      >
        <span>already canned!</span>
      </Alert>
    );
  };
  const [flipped, setFlipped] = useState(true);
  const [help, setHelp] = useState(false);
  const [cannedResponsePicker, setCannedResponsePicker] = useState(false);
  const [mainText, setMainText] = useState(() => {
    if (cookies.get("mainText")) {
      return cookies.get("mainText");
    }
    return null;
  });
  const [cannedResponses, setCannedResponses] = useState(() => {
    if (cookies.get("cannedResponses")) {
      return cookies.get("cannedResponses");
    }
    return [
      {
        title: "Example",
        text: "Hello World!",
        tagColor: "#ff0000",
      },
    ];
  });
  const [fontSize, setFontSize] = useState(() => {
    if (cookies.get("fontSize")) {
      return cookies.get("fontSize");
    }
    return 40;
  });
  const [fontColor, setFontColor] = useState(() => {
    if (cookies.get("fontColor")) {
      return cookies.get("fontColor");
    }
    return "#FFFFFF";
  });
  const [fontColorPicker, setFontColorPicker] = useState(false);
  const [bgColor, setBgColor] = useState(() => {
    if (cookies.get("bgColor")) {
      return cookies.get("bgColor");
    }
    return "#c248ab";
  });
  const [bgColorPicker, setBgColorPicker] = useState(false);
  const [fullscreenCardVisible, setFullscreenCardVisible] = useState(false);
  return (
    <div>
      <Warning />
      <div>
        {!fullscreenCardVisible ? (
          <div className="App">
            <br></br>
            {flipped ? (
              <Card
                className="display-card-upsidedown"
                style={{
                  fontSize: `${fontSize ? fontSize : 40}px`,
                  color: fontColor,
                  backgroundColor: bgColor,
                }}
              >
                <div className="target">
                  <div>
                    <h1
                      className="font-bold tracking-tight text-center"
                      style={{ color: fontColor }}
                    >
                      {mainText}
                    </h1>
                    {/* <Moveable
                    className="move"
                    target={target}
                    draggable={true}
                    throttleDrag={0}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    zoom={1}
                    origin={false}
                    padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    onDragStart={(e) => {
                      e.set(frame.translate);
                    }}
                    onDrag={(e) => {
                      frame.translate = e.beforeTranslate;
                      e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
                    }}
                  /> */}
                  </div>
                </div>
                <div className="expand-button-container">
                  <Button
                    className="expand-button"
                    onClick={() => setFullscreenCardVisible(true)}
                    color="#2b2b2b"
                    style={{
                      focus: "!ring-0",
                    }}
                  >
                    <AiOutlineExpandAlt size={25} />
                  </Button>
                </div>
              </Card>
            ) : (
              <Card
                className="display-card"
                style={{
                  fontSize: `${fontSize ? fontSize : 40}px`,
                  color: fontColor,
                  backgroundColor: bgColor,
                }}
              >
                <div className="target">
                  <div>
                    <h1
                      className="font-bold tracking-tight text-center"
                      style={{ color: fontColor }}
                    >
                      {mainText}
                    </h1>
                    {/* <Moveable
                    target={target}
                    draggable={true}
                    throttleDrag={0}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    zoom={1}
                    origin={false}
                    padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    onDragStart={(e) => {
                      e.set(frame.translate);
                    }}
                    onDrag={(e) => {
                      frame.translate = e.beforeTranslate;
                      e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
                    }}
                  /> */}
                  </div>
                </div>
                <Button
                  className="expand-button"
                  onClick={() => setFullscreenCardVisible(true)}
                  color="#2b2b2b"
                >
                  <AiOutlineExpandAlt size={25} />
                </Button>
              </Card>
            )}
            <Modal
              className=""
              show={help}
              size="md"
              popup={true}
              onClose={() => setHelp(false)}
              onClick={() => setHelp(false)}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    This web-app is meant to help the D/deaf and hard of hearing
                    community communicate with people who do not know ASL.
                    Essentially a lightweight digital replacement for carrying a
                    notepad.
                  </h3>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              show={cannedResponsePicker}
              size="md"
              popup={true}
              onClose={() => {
                setCannedResponsePicker(false);
              }}
            >
              <Modal.Header>
                <div className="text-center">Canned Text</div>
              </Modal.Header>
              <Modal.Body>
                <div className="text-center">
                  {cannedResponses.map((cr) => {
                    return (
                      <div>
                        <Card
                          className="canned-text-card"
                          onClick={() => {
                            setMainText(cr.text);
                            setCookie("mainText", cr.text);
                            setCannedResponsePicker(false);
                          }}
                        >
                          <div className="flex justify-end">
                            <Button
                              color="#2b2b2b"
                              className="flip-button"
                              onClick={(e) => {
                                setCannedResponses(
                                  [...cannedResponses].filter(
                                    (e) => e.title !== cr.title
                                  )
                                );
                                setCookie(
                                  "cannedResponses",
                                  [...cannedResponses].filter(
                                    (e) => e.title !== cr.title
                                  )
                                );
                                e.stopPropagation();
                              }}
                            >
                              <AiFillDelete color="#ff2b2b" size={17} />
                            </Button>
                          </div>
                          <div className="flex flex-col items-center pb-10">
                            <h5 className="text-sm text-white dark:text-gray-400">
                              {cr.text}
                            </h5>
                          </div>
                        </Card>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </Modal.Body>
            </Modal>
            <br />
            <div>
              <div
                style={{
                  display: "flex",
                  "align-items": "center",
                  "justify-content": "center",
                }}
              >
                <div>
                  <Button
                    className="flip-button"
                    onClick={() => {
                      setCannedResponsePicker(true);
                    }}
                    color="#2b2b2b"
                  >
                    <GiSodaCan size={17} />
                  </Button>
                </div>
                <div style={{ width: "60%" }}></div>
                <div>
                  <Button
                    className="flip-button"
                    onClick={() => {
                      if (
                        cannedResponses.filter((e) => {
                          if (e.text === mainText) return true;
                        }).length < 1
                      ) {
                        setCannedResponses(
                          [...cannedResponses].concat({
                            title: mainText.substring(0, 10),
                            text: mainText,
                          })
                        );
                        setCookie(
                          "cannedResponses",
                          [...cannedResponses].concat({
                            title: mainText.substring(0, 10),
                            text: mainText,
                          })
                        );
                      } else {
                        setAlreadyCannedAlertVisible(true);
                      }
                    }}
                    color="#2b2b2b"
                  >
                    <IoMdAddCircle size={17} />
                  </Button>
                </div>
              </div>
              <br />
              <Textarea
                className="input-field"
                id="maintext"
                placeholder="Enter a message"
                rows={5}
                value={mainText}
                onChange={(e) => {
                  setMainText(e.target.value);
                  setCookie("mainText", e.target.value);
                }}
              />
            </div>
            <br></br>
            <div className="flex flex-wrap gap-2" style={{ margin: "auto" }}>
              <Button.Group outline={false} style={{ margin: "auto" }}>
                <Button
                  className="flip-button"
                  onClick={() => {
                    setCookie("flipped", !flipped, { path: "/" });
                    setFlipped(!flipped);
                  }}
                  color="#2b2b2b"
                >
                  <TbRotate360 size={17} />
                </Button>
                <Button
                  className="flip-button"
                  onClick={() => {
                    if (fontSize < 70) {
                      setCookie("fontSize", fontSize + 5);
                      setFontSize(fontSize + 5);
                    }
                  }}
                  color="#2b2b2b"
                >
                  <AiOutlineArrowUp size={17} />
                </Button>
                <Button
                  className="flip-button"
                  onClick={() => {
                    if (fontSize > 5) {
                      setCookie("fontSize", fontSize + 5);
                      setFontSize(fontSize - 5);
                    }
                  }}
                  color="#2b2b2b"
                >
                  <AiOutlineArrowDown size={17} />
                </Button>
                <Button
                  className="flip-button"
                  onClick={() => {
                    setBgColorPicker(false);
                    setFontColorPicker(!fontColorPicker);
                  }}
                  color="#2b2b2b"
                >
                  <AiOutlineFontColors size={17} />
                </Button>
                <Button
                  className="flip-button"
                  onClick={() => {
                    setFontColorPicker(false);
                    setBgColorPicker(!bgColorPicker);
                  }}
                  color="#2b2b2b"
                >
                  <IoIosColorPalette size={17} />
                </Button>
                <Button
                  className="flip-button"
                  onClick={() => {
                    setMainText("");
                    setCookie("mainText", "");
                  }}
                  color="#2b2b2b"
                >
                  <BiEraser size={17} />
                </Button>
                <Button
                  className="flip-button"
                  onClick={() => {
                    setHelp(true);
                  }}
                  color="#2b2b2b"
                >
                  <AiOutlineQuestion size={17} />
                </Button>
              </Button.Group>
            </div>
            {fontColorPicker && !bgColorPicker ? (
              <div>
                <label>select a font color</label>
                <SliderPicker
                  color={fontColor}
                  width="95%"
                  onChange={(color) => {
                    setFontColor(color.hex);
                    setCookie("fontColor", color.hex);
                  }}
                />
              </div>
            ) : null}
            {bgColorPicker && !fontColorPicker ? (
              <div>
                <label>select a background color</label>
                <SliderPicker
                  color={bgColor}
                  width="95%"
                  onChange={(color) => {
                    setBgColor(color.hex);
                    setCookie("bgColor", color.hex);
                  }}
                />
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            <br></br>
            {flipped ? (
              <Card
                className="display-card-upsidedown-fs"
                style={{
                  fontSize: `${fontSize ? fontSize : 40}px`,
                  color: fontColor,
                  backgroundColor: bgColor,
                }}
                onClick={() => setFullscreenCardVisible(false)}
              >
                <div className="target">
                  <div>
                    <h1
                      className="font-bold tracking-tight text-center"
                      style={{ color: fontColor }}
                    >
                      {mainText}
                    </h1>
                    {/* <Moveable
                    className="move"
                    target={target}
                    draggable={true}
                    throttleDrag={0}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    zoom={1}
                    origin={false}
                    padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    onDragStart={(e) => {
                      e.set(frame.translate);
                    }}
                    onDrag={(e) => {
                      frame.translate = e.beforeTranslate;
                      e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
                    }}
                  /> */}
                  </div>
                </div>
                <div className="expand-button-container">
                  <Button
                    className="expand-button"
                    onClick={() => setFullscreenCardVisible(false)}
                    color="#2b2b2b"
                  >
                    <AiOutlineShrink size={25} />
                  </Button>
                </div>
              </Card>
            ) : (
              <Card
                className="display-card-fs"
                style={{
                  fontSize: `${fontSize ? fontSize : 40}px`,
                  color: fontColor,
                  backgroundColor: bgColor,
                }}
                onClick={() => setFullscreenCardVisible(false)}
              >
                <div className="target">
                  <div>
                    <h1
                      className="font-bold tracking-tight text-center"
                      style={{ color: fontColor }}
                    >
                      {mainText}
                    </h1>
                    {/* <Moveable
                    target={target}
                    draggable={true}
                    throttleDrag={0}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    zoom={1}
                    origin={false}
                    padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    onDragStart={(e) => {
                      e.set(frame.translate);
                    }}
                    onDrag={(e) => {
                      frame.translate = e.beforeTranslate;
                      e.target.style.transform = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
                    }}
                  /> */}
                  </div>
                </div>
                <Button
                  className="expand-button"
                  onClick={() => setFullscreenCardVisible(false)}
                  color="#2b2b2b"
                >
                  <AiOutlineShrink size={25} />
                </Button>
              </Card>
            )}
          </div>
        )}
        <br></br>
        <div></div>
        <br></br>
        <Footer_ />
      </div>
    </div>
  );
}

export default App;
